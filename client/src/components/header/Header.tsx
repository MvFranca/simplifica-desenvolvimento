import styles from "../../styles/home/Header.module.css";

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <h1>SIMPLIFICA</h1>
      <nav>
        <div className={styles.teste}>
        <img src="./home.png" alt="Home" />
          <a href="#" >
            APRENDER
          </a>
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
        <div>
          <img src="./config.png" alt="Configurações" />
          <a href="#">CONFIGURAÇÕES</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
