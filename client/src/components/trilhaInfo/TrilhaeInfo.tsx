import { useEffect, useState } from "react";
import Main from "../main/Main";
import Opcoes from "../opcoes/Opcoes";
import styles from "../../styles/home/TrilhaeInfo.module.css";
import axios from "axios";
//import PopUp from "./popup/PopUp";

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  // const user = localStorage.getItem("simplifica:user")!;
  // const userObject = JSON.parse(user);

  // const idUser = Number(userObject.id_usuario);
 

  async function api() {


    axios.get("http://localhost:8000/api/content/trilha").then((res) => {
      const resposta = res.data.data;
      setConteudos(resposta);

    })

    // .catch((err) => {
    //   console.log(err);
    // });

    // const conteudos = await fetch("http://localhost:5173/trilha/trilha.json");
    // const data = await conteudos.json();
    // setConteudos(data);
  }




  useEffect(() => {
    api();
  }, []);

  return (
   <main className={styles.main}>
      <div className={styles.conteudoContainer}>
        {conteudos?.map((assunto) => {
          const { conteudo, descricao, id, img_url = '' } = assunto;
          return (
            <Main
              conteudo={conteudo}
              descricao={descricao}
              key={id}
              id={id}
              src={img_url}
            />
          );
        })}
      </div>

      <div className={styles.opcoes}>
        <Opcoes />
      </div>
    </main>
  );
};

export default TrilhaeInfo;
