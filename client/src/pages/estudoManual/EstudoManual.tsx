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

  async function fetchData() {
    api.get('/content/trilha').then((res) => {
      setConteudos(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.conteudos}>
        {conteudos?.map((conteudo) => {
          return (
            <Conteudo
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
