import styles from "../../styles/auth/InicioInfo.module.css";
import { Link } from "react-router-dom";

 type elementos = {
    opcao: string,
    caminho: string,
}

const InicioInfo = ({opcao, caminho}: elementos) => {
    return(
        <div className={styles.container}>
            <div className={styles.informacoes}>
                {/* <img src="./logo-simplifica.png" alt="Logo Simplifica" className={styles.logo}/> */}
                <h1>
                    SIMPLIFICA
                </h1>
                <p>
                    Este é o melhor ambiente para aprender os conceitos iniciais sobre lógica de programação.
                </p>
            </div>
            <div className={styles.botoes}>
                <div className={styles.entrar}>
                    <Link to="/entrar" >
                        Entrar
                    </Link>
                </div>
                <div>
                    <Link to={`${caminho}`}>
                        {opcao}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InicioInfo;