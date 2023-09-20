import { useNavigate, useParams } from "react-router-dom";
import Pergunta from "../../components/pergunta/Pergunta";
import { useEffect, useState } from "react";
import { dados } from "../../types/dados";
import Carregamento from "../../components/carregamento/Carregamento";

const Jogar = () => {
  const [assunto, setAssunto] = useState<Array<dados>>([]);

  const { id } = useParams();
  const router = useNavigate()


  async function conteudos() {
    const api = await fetch(`http://127.0.0.1:5174/trilha/${id}.json`);
    const data = await api.json();
    setAssunto(data);
  }

  useEffect(() => {
    conteudos();

      const value = localStorage.getItem("simplifica: token");
      if (!value) router("/entrar");
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
