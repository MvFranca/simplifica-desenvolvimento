import { useNavigate, useParams } from 'react-router-dom';
import Pergunta from '../../components/pergunta/Pergunta';
import { useEffect, useState } from 'react';
import { dados } from '../../types/dados';
import Carregamento from '../../components/carregamento/Carregamento';
import { api } from '../../services/api';

const Jogar = () => {
  const [assunto, setAssunto] = useState<dados[]>([]);

  const { id } = useParams();
  const router = useNavigate();

  async function Questions(id: number | string) {
    try {
      const { data } = await api.get(`/aprender/questao/${id}`);

      setAssunto(data.data);
    } catch (Err) {
      console.log(Err);
    }
  }

  useEffect(() => {
    if (id) {
      Questions(id);
    }

    const value = localStorage.getItem('simplifica:token');
    if (!value) router('/entrar');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {assunto[0] ? (
        <Pergunta assunto={assunto} totalQuestions={assunto.length} />
      ) : (
        <Carregamento />
      )}
    </div>
  );
};

export default Jogar;
