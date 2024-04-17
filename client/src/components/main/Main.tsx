import { useEffect, useState, useContext } from "react";
import "../../styles/home/Main.css";
import Botoes from "../botoes/Botoes";
import { pointContext } from "../../context/context";

type props = {
  conteudo: string;
  descricao: string;
  id: number;
  src: string;

};




const Main = ({ conteudo, descricao, id, src }: props) => {

  const { myProgress } = useContext(pointContext)
  const [classe, setClasse] = useState('titulo')

  useEffect(() => {
  
    if(id && myProgress >= id ){

      setClasse("titulo")

    }

    else{
      setClasse("titulo-block")
    }

  }, [id, myProgress])
  
  return (
    <main className={"container"}>

      <div className={classe}>
        <h2>{conteudo}</h2>
        <p>{descricao}</p>
      </div>

      <div className={"containerBotoes"}>
        <Botoes 
          id={id}
          conteudo ={conteudo} 

        />

        <img
          src={src}
          alt="programador"
          width={260}
          height={200}
          className={"imagem"}
        />
      </div>
    </main>
  );
};

export default Main;
