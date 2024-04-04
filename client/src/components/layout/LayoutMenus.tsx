import MenuMobile from "../menuMobile/MenuMobile";
import MenuTopo from "../menuTopo/MenuTopo";
import { Outlet } from "react-router-dom";
import styles from "../../styles/layouts/LayoutMenus.module.css";
import Header from "../header/Header";

const LayoutMenus = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <MenuTopo />
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <MenuMobile />
      </div>
    </>
  );
};

export default LayoutMenus;
