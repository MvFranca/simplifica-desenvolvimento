import { useNavigate } from "react-router-dom";
import styles from "../../styles/home/Header.module.css";


const Header = () => {
  const router = useNavigate();

  function sair(){
    localStorage.removeItem('simplifica:token')
    router('/entrar')
  }

  return (
    <header className={styles.cabecalho}>
      <h1>SIMPLIFICA</h1>
      <nav>
        <div className={styles.teste} onClick={() => {
          router('/')
        }}>
          <img src="./home.png" alt="Home" />
          <a >APRENDER</a>
        </div>
        <div>
          <img src="./book.png" alt="Praticar" />
          <a href="#">PRATICAR</a>
        </div>
        <div>
          <img src="./comunidade.png" alt="Comunidade" />
          <a href="#">COMUNIDADE</a>
        </div>
        <div>
          <img src="./perfil.png" alt="Perfil" />
          <a href="#">PERFIL</a>
        </div>
        <div onClick={sair}>
          <img src="./config.png" alt="Configurações" />
          <a href="/entrar">SAIR</a>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
