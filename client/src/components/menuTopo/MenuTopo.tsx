import IconDiamond from "../icons/IconDiamond";
import IconFire from "../icons/IconFire";
import styles from "../../styles/home/MenuTopo/MenuTopo.module.css";

import { pointContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";

const MenuTopo = () => {
  const { pontos } = useContext(pointContext);
  const [username, setUsername] = useState("")

  useEffect(() => {
    const user = localStorage.getItem("simplifica:user")!;
    const userObject = JSON.parse(user);

    const idUser = Number(userObject.id_usuario);

    console.log("pontuação sendo atualizada: ")
    console.log(pontos)

    console.log('idUser:')
    console.log(user)
    setUsername(user.username)
  // axios
  // .post("http://localhost:8000/api/points/diamantes", { idUser })
  // .then((res) => {
  //   const pontuacao = res.data.data.resposta;
  //   setPontos(pontuacao);
  // })

  // .catch((err) => {
  //   console.log(err);
  // });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [pontos]);


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
