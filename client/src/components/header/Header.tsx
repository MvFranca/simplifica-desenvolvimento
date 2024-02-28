import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../styles/home/Header.module.css";

const Header = () => {
  const router = useNavigate();

  function sair() {
    localStorage.removeItem("simplifica:token");
    router("/entrar");
  }

  return (
    <header className={styles.cabecalho}>
      <h1>SIMPLIFICA</h1>
      <nav>
        <NavLink  to={"/"}>
          <img src="./home.png" alt="Home" />
          <p>APRENDER</p>
        </NavLink>
        <NavLink to={"/estudomanual"}>
          <img src="./book.png" alt="Praticar" />
          <p>PRATICAR</p>
        </NavLink>
        <NavLink to={"/comunidade"}>
          <img src="./comunidade.png" alt="Comunidade" />
          <p>COMUNIDADE</p>
        </NavLink>
        <NavLink to={"/ranking"}>
          <img src="./ranking.png" alt="Perfil" />
          <p>RANKING</p>
        </NavLink>
        <NavLink onClick={sair} to={"/entrar"}>
          <img src="./config.png" alt="Configurações" />
          <p>SAIR</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
