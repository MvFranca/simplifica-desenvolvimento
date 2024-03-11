import Header from "../header/Header";
import MenuMobile from "../menuMobile/MenuMobile";
import MenuTopo from "../menuTopo/MenuTopo";
import { Outlet } from "react-router-dom";

const LayoutMenus = () => {
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