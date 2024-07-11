import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

interface IPontuacao {
  id: number;
  pontuacao: number;
  fogo: number;
  usuarioId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IProgresso {
  id: number;
  conteudoId: number;
  avanco: number;
  usuarioId: number;
}

interface UserContextData {
  id: number;
  username: string;
  fullname: string;
  email: string;
  pontuacao: IPontuacao;
  progresso: IProgresso;
  turma: number;
  createdAt: Date;
  updatedAt: Date;
}

interface SignInData {
  email: string;
  senha: string;
}

interface IAuthContext {
  isAuthenticated: boolean | null;
  user: UserContextData | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface ILoginResponseData {
  message?: string;
  data?: {
    token: {
      token: string;
      refreshToken: string;
    };
    user: UserContextData;
  };
  error?: string;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useNavigate();

  const [user, setUser] = useState<UserContextData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const signIn = async ({ email, senha }: SignInData) => {
    const result = await api.post<ILoginResponseData>('/auth/login', {
      email,
      senha,
    });

    const token = result.data.data?.token?.token;
    const user = result.data.data?.user;

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setCookie(undefined, 'simplifica.token', token, {
        maxAge: 60 * 60,
        path: '/',
      });
    }

    if (user) {
      setUser(user);
      setCookie(undefined, 'simplifica.userId', user.id.toString(), {
        maxAge: 60 * 60, // 7 days
        path: '/',
      });
    }

    router('/');
  };

  const signOut = () => {
    try {
      destroyCookie(undefined, 'simplifica.token', { path: '/' });
      destroyCookie(undefined, 'simplifica.userId', { path: '/' });
      api.defaults.headers.Authorization = '';
      setUser(null);
      setIsAuthenticated(false);
      router('/entrar');
    } catch (error) {
      console.log('Erro: ');
      console.log(error);
    }
  };

  useEffect(() => {
    const setUserFromApi = async (userId: string) => {
      const { data, status } = await api.get<{ data: UserContextData }>(
        '/users/user/' + userId
      );
      if (status === 200) {
        setUser(data.data);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    const { 'simplifica.token': token } = parseCookies();
    const { 'simplifica.userId': userId } = parseCookies();

    if (token != 'undefined' && userId != 'undefined' && token && userId) {
      setUserFromApi(userId);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
