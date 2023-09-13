/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState } from "react";


interface pontuacao {
  pontos: number;
  fogo: number;
  setPontos: (number: number) => void;
  setFogo: (number: number) => void;

  variaveis: boolean;
  setVariaveis: (valor: boolean) => void;

}

const initialValue = {
  pontos: 0,
  fogo: 0,
  setPontos: () => {},
  setFogo: () => {},

  variaveis: false,
  setVariaveis: () => {},
};


export const pointContext = createContext<pontuacao>(initialValue);

const Context = ({children}: PropsWithChildren) => {

  const [pontos, setPontos] = useState(0);
  const [fogo, setFogo] = useState(0);
  const [variaveis, setVariaveis] = useState(false)

  return (
    <pointContext.Provider value={{pontos, setPontos, fogo, setFogo, variaveis, setVariaveis}}>
        {children}
    </pointContext.Provider>
  );
};

export default Context;
