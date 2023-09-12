import IconDiamond from "../icons/IconDiamond";
import IconFire from "../icons/IconFire";
import styles from "../../styles/home/MenuTopo/MenuTopo.module.css";

import { pointContext } from "../../context/context";
import { useContext } from "react";

const MenuTopo = () => {
  const { pontos } = useContext(pointContext);

  return (
    <div className={styles.container}>
      <h1>SIMPLIFICA</h1>
      <div>
        <IconFire width={23} height={23} color="rgb(255, 126, 66)" />
        <p>0</p>
      </div>
      <div>
        <IconDiamond width={23} height={23} color="rgb(255, 0, 0)" />
        <p>{pontos}</p>
      </div>
    </div>
  );
};

export default MenuTopo;
