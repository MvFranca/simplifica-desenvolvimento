/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useRef, useState } from "react";
import { Dispatch, SetStateAction } from 'react';


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

  teste: React.MutableRefObject<boolean>;

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
};


export const pointContext = createContext<pontuacao>(initialValue);

const Context = ({children}: PropsWithChildren) => {

  const [pontos, setPontos] = useState(0);
  const [fogo, setFogo] = useState(0);
  const [initialValuePontos, setInitialValuePontos ] = useState(false)
  const [variaveis, setVariaveis] = useState(false)
  const teste = useRef<boolean>(false)

  const [userId, setUserId] = useState(0)
  const [img, setImg] = useState('')

  // const [dataUser, setDataUser] = useState(
  //   {
  //     name: "",
  //     username: "",
  //     urlImg: ""
  //   }
  // )


  return (
    <pointContext.Provider value={{teste, pontos, setPontos, fogo, setFogo, variaveis, setVariaveis, userId, setUserId, initialValuePontos, setInitialValuePontos}}>
        {children}
    </pointContext.Provider>
  );
};

export default Context;
