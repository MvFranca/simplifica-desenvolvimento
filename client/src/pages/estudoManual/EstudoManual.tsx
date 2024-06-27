import Conteudo from '../../components/estudoManual/conteudo';
import { api } from '../../services/api';
import styles from '../../styles/estudoManual/EstudoManual.module.css';
import { useEffect, useState } from 'react';

interface conteudos {
  conteudo: string;
  descricao: string;
  id: number;
}

const EstudoManual = () => {
  const [conteudos, setConteudos] = useState<Array<conteudos>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/content/trilha');

      setConteudos(data.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.conteudos}>
        {conteudos?.map((conteudo) => {
          return (
            <Conteudo
              key={conteudo.id}
              titulo={conteudo.conteudo}
              descricao={conteudo.descricao}
              id={conteudo.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EstudoManual;
