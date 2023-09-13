import styles from "../../styles/home/MenuMobile.module.css";

const MenuMobile = () => {
  return (
    <div className={styles.container}>
      <nav>
        <a href="#" className={styles.home}>
          <img src="./home.png" alt="Home" />
        </a>
        <a href="#">
          <img src="./book.png" alt="Aprenda" />
        </a>
        <a href="#">
          <img src="./comunidade.png" alt="Comunidade" />
        </a>
        <a href="#">
          <img src="./perfil.png" alt="Perfil" />
        </a>
        <a href="#">
          <img src="./config.png" alt="Configurações" />
        </a>
      </nav>
    </div>
  );
};

export default MenuMobile;
