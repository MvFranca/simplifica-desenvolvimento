import InicioForm from '../../components/auth/InicioEntrar';
import InicioInfo from '../../components/auth/InicioInfo';

import styles from '../../styles/auth/Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <InicioInfo opcao="Registrar-se" caminho="/registrar" />
      <div className={styles.info}>
        <InicioForm />
      </div>
    </div>
  );
};

export default Login;
