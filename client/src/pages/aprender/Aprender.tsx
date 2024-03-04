import { useEffect, useRef, useState } from "react";
import Revisao from "../../components/revisão/Revisao";
import { conteudos } from "../../types/conteudos";
import Carregamento from "../../components/carregamento/Carregamento";
import { Link, useNavigate, useParams } from "react-router-dom";
import Component1 from "../../components/revisão/Component1";
import IconClose from "../../components/icons/IconClose";
import styles from "../../styles/home/Revisao.module.css";

const Aprender = () => {
  const [conteudo, setConteudo] = useState<Array<conteudos>>([]);
  const barra = useRef<HTMLDivElement>(null);

  const { id } = useParams();
  const router = useNavigate()
  const [assuntoAtual, setAssuntoAtual] = useState(0);

  async function conteudos() {
    const api = await fetch(`https://simplificaa.vercel.app/aprenda/${id}.json`);
    const data = await api.json();
    setConteudo(data);
  }

  
  useEffect(() => {
    conteudos();
    const value = localStorage.getItem("simplifica:token")
    if(!value ) router('/entrar')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      
      {conteudo[0] ? 
      <div>
        <div className={styles.miniHeader}>
            <h1>{conteudo[assuntoAtual].titulo}</h1>
            <div className={styles.barradeProgresso}>
              <div className={styles.progresso} ref={barra}></div>
            </div>
            <Link to={"/"}>
              <IconClose width={30} height={30} color="#000000" />
          </Link>
          </div>
      {/* // <Revisao 
      // conteudo={conteudo}
      // /> */}

      <Component1/>
      </div>
       :
       <Carregamento/>  
    }
      
    </>
  );
};

export default Aprender;
