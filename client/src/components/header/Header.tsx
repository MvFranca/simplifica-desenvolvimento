import { NavLink } from "react-router-dom";
import styles from "../../styles/home/Header.module.css";
import { useContext } from "react";
import { pointContext } from "../../context/context";

const Header = () => {


  const { img } = useContext(pointContext)

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
          <img src="./ranking.png" alt="Ranking" />
          <p>RANKING</p>
        </NavLink>
        <NavLink to={"/perfil"}>
          {
            img ?
            <img src={img} alt="Perfil" className={styles.myImage}/>
            :
            <img src="./perfil.png" alt="Perfil" />
          }
          <p>Perfil</p>
        </NavLink>
        {/* <NavLink onClick={sair} to={"/entrar"}>
          <img src="./config.png" alt="Configurações" />
          <p>SAIR</p>
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Header;
