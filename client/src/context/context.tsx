/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useEffect, useRef, useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import {updateProgress} from '../../services/apiUrl'
import { Duvidas } from "../types/IDuvida";


interface pontuacao {
  pontos: number;
  fogo: number;

  userId: number;
  setUserId:  (number: number) => void;

  setPontos: Dispatch<SetStateAction<number>>;
  setFogo: (number: number) => void;

  setInitialValuePontos: (number: boolean) => void;
  initialValuePontos: boolean;

  variaveis: boolean;
  setVariaveis: (valor: boolean) => void;

  
  duvidas: Array<Duvidas>;
  setDuvidas: Dispatch<SetStateAction<Array<Duvidas>>>;

  teste: React.MutableRefObject<boolean>;
  controle: React.MutableRefObject<boolean>;
  
  img: string;
  setImg: (string: string) => void;

  myProgress: number;
  setMyProgress:  Dispatch<SetStateAction<number>>;

  progressoBotoes: number;
  setProgressoBotoes:  Dispatch<SetStateAction<number>>;
}

const initialValue = {
  pontos: 0,
  fogo: 0,

  userId: 0,
  setUserId: () => {},

  setPontos: () => {},
  setFogo: () => {},
  variaveis: false,
  setInitialValuePontos: () => {},
  initialValuePontos: false,
  setVariaveis: () => {},
  setUsuario: () => {},
  teste: { current: false },
  controle: {current: false},
  img: '',
  setImg: () => {},
  
  duvidas: [] ,

  setDuvidas: () => {},

  myProgress: 1,
  setMyProgress:   () => {},

  progressoBotoes: 1,
  setProgressoBotoes:   () => {},

};


interface User {
  url_image: string
}

export const pointContext = createContext<pontuacao>(initialValue);

const Context = ({children}: PropsWithChildren) => {

  const [pontos, setPontos] = useState(0);
  const [fogo, setFogo] = useState(0);
  const [initialValuePontos, setInitialValuePontos ] = useState(false)
  const [variaveis, setVariaveis] = useState(false)
  const teste = useRef<boolean>(false)
  const controle = useRef<boolean>(false)

  const [duvidas, setDuvidas] = useState<Array<Duvidas>>([]);

  const user = localStorage.getItem("simplifica:user")!;

  const [userId, setUserId] = useState(0)
  const [img, setImg] = useState('')
  

  const [myProgress, setMyProgress] = useState(1)
  const [progressoBotoes, setProgressoBotoes] = useState(0)
  
  const imgUrl = async () => {
    // const ImgUrl = await GetImgUser()
    // setImg(ImgUrl)
    if(user){
      const userObject:User = await JSON.parse(user);

        const urlImg = await userObject.url_image
        setImg(urlImg)
    }
   
  }


  useEffect(() => {
  
      imgUrl()
  }, [img, user])


 useEffect(() => {

  if(controle.current && user){
    const userObject = JSON.parse(user);
    const idUser = Number(userObject.id_usuario);

    updateProgress(myProgress, idUser, progressoBotoes)
    controle.current = false
  }

}, [myProgress, progressoBotoes, user])

  return (
    <pointContext.Provider value={{teste, pontos, setPontos, fogo, setFogo, variaveis, setVariaveis, userId, setUserId, initialValuePontos, setInitialValuePontos, img, setImg, myProgress, setMyProgress, progressoBotoes, setProgressoBotoes, controle, duvidas, setDuvidas}}>
        {children}
    </pointContext.Provider>
  );
};

export default Context;
