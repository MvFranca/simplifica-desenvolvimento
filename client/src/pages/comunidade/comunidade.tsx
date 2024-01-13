import Chat from "../../components/chat/chat";
import Header from "../../components/header/Header";
import styles from "../../styles/comunidade/Comunidade.module.css";
import FormChat from "../../components/chat/FormChat";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import MenuTopo from "../../components/menuTopo/MenuTopo";

const Comunidade = () => {
  return (
    <div className={styles.container}>
      <MenuMobile/>
      <MenuTopo/>
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
