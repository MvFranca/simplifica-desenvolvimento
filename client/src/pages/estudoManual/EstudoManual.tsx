import Conteudo from "../../components/estudoManual/conteudo";
import Header from "../../components/header/Header";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import styles from "../../styles/estudoManual/EstudoManual.module.css";
import { useEffect, useState } from "react";

const EstudoManual = () => {
  const [conteudos, setConteudos] = useState([]);

  async function api() {
    const api = await fetch("http://127.0.0.1:5173/trilha/trilha.json");
    const json = await api.json();
    setConteudos(json);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Header />
      </div>
      <div className={styles.conteudos}>
        {conteudos.map((conteudo) => {
          return (
            <Conteudo
              titulo={conteudo.conteudo}
              descricao={conteudo.descricao}
              id = {conteudo.id}
            />
          );
        })}
      </div>

      <MenuTopo />
      <MenuMobile />
    </div>
  );
};

export default EstudoManual;
