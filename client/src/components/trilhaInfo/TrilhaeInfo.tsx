import { useEffect, useState } from 'react';
import Main from '../main/Main';
import Opcoes from '../opcoes/Opcoes';
import styles from '../../styles/home/TrilhaeInfo.module.css';
import { api } from '../../services/api';

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  async function fetchData() {
    api
      .get('/content/trilha')
      .then((res) => {
        const resposta = res.data.data;
        setConteudos(resposta);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
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
