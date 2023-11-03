import Chat from "../../components/chat/chat";
import Criacao from "../../components/chat/criacao";
import Header from "../../components/header/Header";
import styles from "../../styles/comunidade/Comunidade.module.css";

const Comunidade = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <section className={styles.conteudo}>
        <div className={styles.chat}>
          <Chat />
        </div>

        <div className={styles.criacao}>
          <Criacao/>
        </div>
      </section>

    </div>
  );
};

export default Comunidade;
