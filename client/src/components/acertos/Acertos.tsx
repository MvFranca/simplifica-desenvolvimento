import { useContext, useEffect, useRef, useState } from 'react';
import styles from '../../styles/home/Acertos.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { pointContext } from '../../context/context';
import { api } from '../../services/api';

type props = {
  acertos: number;
  quantidadeQuestoes: number;
};

const Acertos = ({ acertos, quantidadeQuestoes }: props) => {
  const [porcentagem, setPorcentagem] = useState(0);
  const { teste, fogo, setFogo } = useContext(pointContext);
  const points = useRef(fogo);

  useEffect(() => {
    const porcentagem = Math.trunc((acertos * 100) / quantidadeQuestoes);
    setPorcentagem(porcentagem);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (porcentagem == 100) {
      setFogo((prev: number) => prev + 4);
    } else if (porcentagem >= 50 && porcentagem < 100) {
      setFogo((prev: number) => prev + 2);
    } else if (porcentagem < 50 && porcentagem > 0) {
      setFogo((prev: number) => prev + 1);
    } else if (porcentagem == 0) return;
    points.current = fogo;
    teste.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [porcentagem]);

  useEffect(() => {
    const updateFogoData = async (idUser: number) => {
      await api.put(`/points/user/${idUser}/fogo`, { fogo });
    };

    if (fogo !== points.current) {
      const user = localStorage.getItem('simplifica:user')!;
      const userObject = JSON.parse(user);

      const idUser = Number(userObject.id);

      updateFogoData(idUser);
    }
  }, [fogo]);

  return (
    <div className={styles.container}>
      <h1>QUIZ FINALIZADO</h1>

      <div className={styles.dados}>
        <div className={styles.aproveitamento}>
          <p>
            Seu aproveitamento foi de: <strong>{porcentagem}%</strong>
          </p>
        </div>
        <div className={styles.numeros}>
          <p className={styles.acertos}>
            <strong> {acertos}</strong>
          </p>
          <div>
            <p>
              <span>ACERTOS DE </span>
              <br />
              <span>
                <strong>{quantidadeQuestoes}</strong> POSSÍVEIS
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acertos;
