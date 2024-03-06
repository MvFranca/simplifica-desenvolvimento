import Conteudo from "../../components/estudoManual/conteudo";
import Header from "../../components/header/Header";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import styles from "../../styles/estudoManual/EstudoManual.module.css";
import { useEffect, useState } from "react";


interface conteudos {
  conteudo:string
  descricao: string
  id: number
}

const EstudoManual = () => {
  const [conteudos, setConteudos] = useState<Array<conteudos>>([]);

  async function api() {
    const api = await fetch("https://simplifica-desenvolvimento.vercel.app/trilha/trilha.json");
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
