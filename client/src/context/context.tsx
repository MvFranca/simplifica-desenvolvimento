/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useEffect, useState } from "react";


interface pontuacao {
  pontos: number;
  fogo: number;

  userId: number;
  setUserId:  (number: number) => void;

  setPontos: (number: number) => void;
  setFogo: (number: number) => void;

  variaveis: boolean;
  setVariaveis: (valor: boolean) => void;

}

const initialValue = {
  pontos: 0,
  fogo: 0,

  userId: 0,
  setUserId: () => {},

  setPontos: () => {},
  setFogo: () => {},
  variaveis: false,
  setVariaveis: () => {},
  setUsuario: () => {}
};


export const pointContext = createContext<pontuacao>(initialValue);

const Context = ({children}: PropsWithChildren) => {

  const [pontos, setPontos] = useState(0);
  const [fogo, setFogo] = useState(0);
  const [variaveis, setVariaveis] = useState(false)

  const [userId, setUserId] = useState(0)

  useEffect(()=> {

  }, [pontos])

  return (
    <pointContext.Provider value={{pontos, setPontos, fogo, setFogo, variaveis, setVariaveis, userId, setUserId}}>
        {children}
    </pointContext.Provider>
  );
};

export default Context;
