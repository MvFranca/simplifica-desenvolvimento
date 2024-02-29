import Header from "../../components/header/Header";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import HeaderProfile from "../../components/perfil/HeaderProfile";
// import TrilhaeInfo from "../../components/trilhaInfo/TrilhaeInfo";

const Perfil = () => {
    return ( 
        <>
        <Header />
        <MenuTopo />

        <HeaderProfile />

        <MenuMobile />
        </>
     );
}
 
export default Perfil;