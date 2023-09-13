import { useParams } from "react-router-dom";
import Pergunta from "../../components/pergunta/Pergunta";
import { useEffect, useState } from "react";
import { dados } from "../../types/dados";
import Carregamento from "../../components/carregamento/Carregamento";

const Jogar = () => {
  const [assunto, setAssunto] = useState<Array<dados>>([]);

  const { id } = useParams();

  async function conteudos() {
    const api = await fetch(`https://simplificaa.vercel.app/trilha/${id}.json`);
    const data = await api.json();
    setAssunto(data);
  }

  useEffect(() => {
    conteudos();
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
