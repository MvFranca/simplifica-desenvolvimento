import InicioInfo from "../../components/auth/InicioInfo";
import InicioRegistro from "../../components/auth/InicioRegistro";
import styles from "../../styles/Login.module.css";

const Registro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <InicioInfo opcao="Entrar" caminho="/entrar" />
      </div>
      <InicioRegistro />
    </div>
  );
};

export default Registro;
