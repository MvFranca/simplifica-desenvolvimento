import { useNavigate, useParams } from "react-router-dom";
import Pergunta from "../../components/pergunta/Pergunta";
import { useEffect, useState } from "react";
import { dados } from "../../types/dados";
import Carregamento from "../../components/carregamento/Carregamento";




const Jogar = () => {
  const [assunto, setAssunto] = useState<dados[]>([]);

  const { id } = useParams();
  const router = useNavigate()


  // async function conteudos() {
  //   const api = await fetch(`https://simplifica-desenvolvimento.vercel.app/trilha/${id}.json`);
  //   const data = await api.json();
  //   setAssunto(data);
  // }

  async function Questions(id: number | string){
    try{
      const api = await fetch(`http://localhost:8000/api/aprender/questao/${id}`);
      const data = await api.json() 
      setAssunto(data.data)
    }
    catch(Err){
      console.log(Err)
    }
  }

  useEffect(() => {
    if(id){
     Questions(id)
    }

    const value = localStorage.getItem("simplifica:token");
    if (!value) router("/entrar");
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {assunto[0] ? (
        <Pergunta assunto={assunto} totalQuestions={assunto.length} />
      ) : <Carregamento/>
      }
    </div>
  );
};

export default Jogar;
