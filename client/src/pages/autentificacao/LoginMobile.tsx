import InicioForm from "../../components/auth/InicioEntrar";
import InicioInfo from "../../components/auth/InicioInfo";
import styles from "../../styles/auth/Login.module.css";

const LoginMobile = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.info}>
        <InicioInfo opcao="Registrar-se" caminho="/registrar" />
      </div>
      <InicioForm />
    </div>
  );
};

export default LoginMobile;
