import Header from "../header/Header";
import MenuMobile from "../menuMobile/MenuMobile";
import MenuTopo from "../menuTopo/MenuTopo";
import { Outlet } from "react-router-dom";
import styles from "../../styles/home/Layout.module.css";

const LayoutMenus = () => {
<<<<<<< HEAD

  return (
    <>
      <div className={styles.container}>
        <Header />
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
=======
    return ( 
        <>
            <Header />
            <MenuTopo />
            
            <Outlet/>
            
            <MenuMobile />
        </>
     );
}
 
export default LayoutMenus;
>>>>>>> master
