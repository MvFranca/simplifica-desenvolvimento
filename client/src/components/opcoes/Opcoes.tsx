import styles from "../../styles/home/Opcoes.module.css";

import IconFire from "../icons/IconFire";
import IconDiamond from "../icons/IconDiamond";
import { pointContext } from "../../context/context";
import { useContext } from "react";

const Opcoes = () => {
  const { pontos, fogo } = useContext(pointContext);

  return (
    <aside className={styles.informacoes}>
      <div className={styles.pontuacao}>
        <div>
          <IconFire width={23} height={23} color="rgb(255, 126, 66)" />
          <p>{fogo}</p>
        </div>
        <div>
          <IconDiamond width={23} height={23} color="rgb(255, 0, 0)" />
          <p>{pontos}</p>
        </div>

        <div>
          <img src="./perfil.png" alt="Perfil" />
        </div>
      </div>

      <div className={styles.estudoManual}>
        <div className={styles.textos}>
          <div className={styles.descricao}>
            <h2>ESTUDO MANUAL</h2>
            <p>Pesquise e aprenda conceitos no seu tempo.</p>
          </div>
          <div>
            <img
              alt="livro"
              src={"/book.png"}
              width={100}
              height={100}
              className={styles.imagens}
            />
          </div>
        </div>
        <button className={styles.botao}>CLIQUE AQUI PARA ACESSAR</button>
      </div>

      <div className={styles.comunidade}>
        <h2>COMUNIDADE</h2>
        <div className={styles.textos} id={styles.infoComunidade}>
          <img
            alt="livro"
            src={"/comunidade.png"}
            width={70}
            height={70}
            className={styles.imagens}
          />
          <p>
            Deixe suas dúvidas na comunidade para que monitores possam
            responder.
          </p>
        </div>
        <button className={styles.botao}>CLIQUE AQUI PARA ACESSAR</button>
      </div>
      <div className={styles.progresso}>
        <h2>PROGRESSO</h2>
        <div className={styles.textos} id={styles.infoComunidade}>
          <img
            alt="livro"
            src={"/bau.png"}
            width={70}
            height={70}
            className={styles.imagens}
          />
          <div className={styles.dados}>
            <div className={styles.barraProgresso}>
              <div className={styles.barra}></div>
            </div>
            <p>15/20XP</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Opcoes;
