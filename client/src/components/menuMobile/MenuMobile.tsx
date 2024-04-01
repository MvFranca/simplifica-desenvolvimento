import { NavLink } from "react-router-dom";
import styles from "../../styles/home/MenuMobile.module.css";
import { useContext } from "react";
import { pointContext } from "../../context/context";

const MenuMobile = () => {

  const {img} = useContext(pointContext)

  return (
    <div className={styles.container}>
      <nav>
        <NavLink to={'/'} className={styles.home} >
          <img src="/home.png" alt="Home" />
        </NavLink>
        <NavLink to={'/estudomanual'}  className={styles.home}>
          <img src="/book.png" alt="Aprenda" />
        </NavLink>
        <NavLink to={'/comunidade'}  className={styles.home}>
          <img src="/comunidade.png" alt="Comunidade" />
        </NavLink>
        <NavLink to={'/ranking'}  className={styles.home}>
          <img src="/ranking.png" alt="Ranking" />
        </NavLink>
        <NavLink to={'/perfil'}  className={styles.home}>
        {
            img ?
            <img src={img} alt="Perfil" className={styles.myImage}/>
            :
            <img src="/perfil.png" alt="Perfil" />
        }
          </NavLink>
        {/* <a onClick={sair} >
          <img src="./config.png" alt="Configurações" />
        </a> */}
      </nav>
    </div>
  );
};

export default MenuMobile;
