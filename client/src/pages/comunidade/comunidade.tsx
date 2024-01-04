import Chat from "../../components/chat/chat";
import Header from "../../components/header/Header";
import styles from "../../styles/comunidade/Comunidade.module.css";
import FormChat from "../../components/chat/FormChat";

const Comunidade = () => {
  return (
    <div className={styles.container}>


      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.chat}>
        <Chat />
      </div>

      <FormChat/>

    </div>
  );
};

export default Comunidade;
