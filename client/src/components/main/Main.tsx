import { useEffect, useState, useContext } from "react";
import "../../styles/home/Main.css";
import Botoes from "../botoes/Botoes";
import { pointContext } from "../../context/context";

type props = {
  conteudo: string;
  descricao: string;
  id: number;
  src?: string;

};




const Main = ({ conteudo, descricao, id }: props) => {

  const { myProgress } = useContext(pointContext)
  const [classe, setClasse] = useState('titulo')

  useEffect(() => {
    console.log("id:")
    console.log(id)
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
          src={'./trilha/teste.gif'}
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
