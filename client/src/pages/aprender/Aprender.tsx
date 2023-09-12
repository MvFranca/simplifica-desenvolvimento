import { useEffect, useState } from "react";
import Revisao from "../../components/revisão/Revisao";
import { conteudos } from "../../types/conteudos";
import Carregamento from "../../components/carregamento/Carregamento";
import { useParams } from "react-router-dom";


const Aprender = () => {
  const [conteudo, setConteudo] = useState<Array<conteudos>>([]);

  const { id } = useParams();

  async function conteudos() {
    const api = await fetch(`https://simplificaa.vercel.app/aprenda/${id}.json`);
    const data = await api.json();
    setConteudo(data);
  }

  
  useEffect(() => {
    conteudos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
