import { useEffect, useState } from "react";
import Main from "../main/Main";
import Opcoes from "../opcoes/Opcoes";
import styles from "../../styles/home/TrilhaeInfo.module.css";
//import PopUp from "./popup/PopUp";

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  async function api() {
    const conteudos = await fetch("http://127.0.0.1:5174/trilha/trilha.json");
    const data = await conteudos.json();
    setConteudos(data);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <main className={styles.main}>
      {conteudos.map((assunto) => {
        const { conteudo, descricao, id, src } = assunto;
        return (
          <Main
            conteudo={conteudo}
            descricao={descricao}
            key={id}
            id={id}
            src={src}
          />
        );
      })}

      <Opcoes />
    </main>
  );
};

export default TrilhaeInfo;
