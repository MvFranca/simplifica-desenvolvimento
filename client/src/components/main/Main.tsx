import styles from "../../styles/home/Main.module.css";
import Botoes from "../botoes/Botoes";

type props = {
  conteudo: string;
  descricao: string;
  id: string;
  src: string;
};

const Main = ({ conteudo, descricao, id, src }: props) => {
  return (
    <main className={styles.container}>
      <div className={styles.titulo}>
        <h2>{conteudo}</h2>
        <p>{descricao}</p>
      </div>

      <div className={styles.containerBotoes}>
        <Botoes id={id} />

        <img
          src={src}
          alt="programador"
          width={260}
          height={200}
          className={styles.imagem}
        />
      </div>
    </main>
  );
};

export default Main;
