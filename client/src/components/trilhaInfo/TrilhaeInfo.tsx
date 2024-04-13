import { useEffect, useState } from "react";
import Main from "../main/Main";
import Opcoes from "../opcoes/Opcoes";
import styles from "../../styles/home/TrilhaeInfo.module.css";
//import PopUp from "./popup/PopUp";

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  async function api() {
    const conteudos = await fetch("http://localhost:5173/trilha/trilha.json");
    const data = await conteudos.json();
    setConteudos(data);
  }

  useEffect(() => {
    api();
  }, []);

  return (
   <main className={styles.main}>
      <div className={styles.conteudoContainer}>
        {conteudos.map((assunto) => {
          const { conteudo, descricao, id, src, iniciado, avanco } = assunto;
          return (
            <Main
              conteudo={conteudo}
              descricao={descricao}
              key={id}
              id={id}
              src={src}
              iniciado = {iniciado}
              avanco = {avanco}
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
