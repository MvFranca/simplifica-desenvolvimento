import Header from "../../components/header/Header";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import Tabela from "../../components/ranking/Tabela";

const Ranking = () => {
    return ( 
        <div className="">
            <Header/>
            <MenuTopo />
            <Tabela/>
            <MenuMobile />
        </div>
     );
}
 
export default Ranking;