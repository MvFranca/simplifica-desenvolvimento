import { useEffect, useState } from "react";
import Revisao from "../../components/revisão/Revisao";
import { conteudos } from "../../types/conteudos";
import Carregamento from "../../components/carregamento/Carregamento";
import { useNavigate, useParams } from "react-router-dom";


const Aprender = () => {
  const [conteudo, setConteudo] = useState<Array<conteudos>>([]);

  const { id } = useParams();
  const router = useNavigate()

  async function conteudos() {
    const api = await fetch(`https://simplificaa.vercel.app/aprenda/${id}.json`);
    const data = await api.json();
    setConteudo(data);
  }

  
  useEffect(() => {
    conteudos();
    const value = localStorage.getItem("simplifica:token")
    if(!value ) router('/entrar')
  }, []);


  return (
    <>
      {conteudo[0] ? 
      <Revisao 
      conteudo={conteudo}
      />
       :
       <Carregamento/>  
    }
      
    </>
  );
};

export default Aprender;
