import { useEffect, useState } from 'react';
import Main from '../main/Main';
import Opcoes from '../opcoes/Opcoes';
import styles from '../../styles/home/TrilhaeInfo.module.css';
import { api } from '../../services/api';

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/content/trilha');

      const resposta = data.data;
      setConteudos(resposta);
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.conteudoContainer}>
        {conteudos?.map((assunto) => {
          const { conteudo, descricao, id, img_url = '' } = assunto;
          return (
            <Main
              conteudo={conteudo}
              descricao={descricao}
              key={id}
              id={id}
              src={img_url}
            />
          );
        })}
      </div>

      <div className={styles.opcoes}>
        <Opcoes />
      </div>
    </main>
  );
};

export default TrilhaeInfo;
