import { useContext, useEffect, useState } from "react";
import styles from "../../styles/home/Acertos.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pointContext } from "../../context/context";
import axios from "axios";

type props = {
  acertos: number;
  quantidadeQuestoes: number;
};

const Acertos = ({ acertos, quantidadeQuestoes }: props) => {
  const [porcentagem, setPorcentagem] = useState(0);
  const { teste, pontos, setPontos, setInitialValuePontos } = useContext(pointContext);


  // const [res, setRes] = useState(false)

  useEffect(() => {
    const porcentagem = Math.trunc((acertos * 100) / quantidadeQuestoes)
    setPorcentagem(porcentagem);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (porcentagem == 100) {
      setPontos(prev => prev + 4);
    } else if (porcentagem >= 50 && porcentagem < 100) {
      setPontos(prev => prev + 2);
    } else if (porcentagem < 50 && porcentagem > 0) {
      setPontos(prev => prev + 1);
    } else if (porcentagem == 0) return;

    teste.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [porcentagem]);

  

    useEffect(() => {
      const user = localStorage.getItem("simplifica:user")!
      const userObject = JSON.parse(user)
      
      const idUser = Number(userObject.id_usuario)

      axios
        .put("http://localhost:8000/api/points/updateDiamantes", { idUser, pontos })
        .then((res) => {
          console.log(res);
          setRes(true)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [pontos])
    


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
               {/* <ToastContainer /> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acertos;
