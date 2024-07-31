import { useState } from 'react';

import IconLockPasswordFill from '../../icons/IconPassword';
import IconUser from '../../icons/IconUser';
import styles from '../../styles/auth/InicioEntrar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const InicioForm = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setPassword] = useState<string>('');

  const router = useNavigate();

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const toastId = toast.loading('Logando...');

    try {
      const { data } = await api.post('/auth/login', { email, senha });

      toast.update(toastId, {
        render: 'Bem-vindo(a)!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });

      localStorage.setItem('simplifica:user', JSON.stringify(data.data.user));
      localStorage.setItem('simplifica:token', JSON.stringify(data.data.token));
      router('/');
    } catch (err) {
      toast.update(toastId, {
        render: ((err as AxiosError).response?.data as { msg: string }).msg,
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div id={styles.formulario}>
          <div>
            <h1>Entrar na Conta</h1>
          </div>
          {/* <div className={styles.icons}>
            <IconBxlFacebook className={styles.icon} />
            <IconGooglePlus className={styles.icon} />
            <IconApple className={styles.icon} />
          </div> */}
          <div>
            <p>Digite suas credenciais para entrar:</p>
          </div>

          <form onSubmit={submitLogin}>
            <div>
              <label htmlFor="email" className={styles.iconEmail}>
                <IconUser width={20} height={20} color="#000000ad" />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className={styles.iconEmail}
                id={styles.senha}
              >
                <IconLockPasswordFill
                  width={25}
                  height={25}
                  color="#000000ad"
                />
              </label>
              <input
                type="password"
                name="password"
                id="senha"
                placeholder="Senha"
                onChange={(event) => {
                  setPassword(event.currentTarget.value);
                }}
              />
            </div>

            <div>
              <button type="submit">ENTRAR</button>
            </div>
            <div className={styles.voltar}>
              <Link to="/registrar">Registrar</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InicioForm;
