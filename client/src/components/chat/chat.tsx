import { useEffect, useContext, useRef, useState } from 'react';
import styles from '../../styles/comunidade/Chat.module.css';
import DuvidaCard from './duvida';
import { pointContext } from '../../context/context';

import {
  formatDate,
  obterDiaDaSemana,
  obterDiaDeHoje,
} from '../../helpers/formatDate';
import { api } from '../../services/api';

const Chat = () => {
  const [datas, setDatas] = useState<string[]>([]);

  const duvidasScroll = useRef<HTMLDivElement>(null);

  const { setDuvidas, duvidas } = useContext(pointContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/community/duvidas');
      setDuvidas(data.data);
    };

    fetchData();
  }, [setDuvidas]);

  useEffect(() => {
    if (duvidas.length != 0) {
      const datasUnicasSet = new Set();

      duvidas.forEach((duvida) => {
        datasUnicasSet.add(formatDate(duvida.createdAt));
      });

      const datasUnicasArray = Array.from(datasUnicasSet)
        .map((data) => String(data))
        .reverse();

      setDatas(datasUnicasArray);
    }
  }, [duvidas]);

  return (
    <div className={styles.chat}>
      {datas &&
        datas.map((data: string) => {
          return (
            <section className={styles.infoDuvidas}>
              <div className={styles.infoData}>
                <span className={styles.data}>
                  {data == obterDiaDeHoje() ? 'Hoje' : obterDiaDaSemana(data)}
                </span>
                <span className={styles.borda} />
              </div>

              <div className={styles.fullDuvidas}>
                <div className={styles.scroll} ref={duvidasScroll} id="teste">
                  {duvidas
                    ?.slice()
                    .reverse()
                    .map((duvida) => {
                      if (formatDate(duvida.createdAt) == data) {
                        return (
                          <DuvidaCard
                            duvida={{
                              id: duvida.id,
                              titulo: duvida.conteudo,
                              descricao: duvida.descricao,
                            }}
                          />
                        );
                      }
                    })}
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default Chat;
