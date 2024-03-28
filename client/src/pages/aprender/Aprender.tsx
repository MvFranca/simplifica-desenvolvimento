import styles from "../../styles/home/Aprender.module.css";
import { useContext, useEffect, useRef, useState } from "react";
// import Revisao from "../../components/revisão/Revisao";
import { conteudos } from "../../types/conteudos";
import Carregamento from "../../components/carregamento/Carregamento";
import { Link, useNavigate, useParams } from "react-router-dom";
import Component1 from "../../components/revisão/Component1";
import IconClose from "../../components/icons/IconClose";

import { pointContext } from "../../context/context";
import OpcoesAprender from "../../components/revisão/OpcoesAprender";
import Component2 from "../../components/revisão/Component2";
import Component3 from "../../components/revisão/Component3";
import Component4 from "../../components/revisão/Component4";
// import Component3 from "../../components/revisão/Component3";
// import Component4 from "../../components/revisão/Component4";


const Aprender = () => {

  const {setPontos, pontos} = useContext(pointContext)

  const [conteudo, setConteudo] = useState<Array<conteudos>>([]);
  const barra = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [assuntoAtual, setAssuntoAtual] = useState(0);
  const widthElement: number = 100 / conteudo.length;


  const { id } = useParams();
  const router = useNavigate()

  async function conteudos() {
    const api = await fetch(`https://simplifica-desenvolvimento.vercel.app/aprenda/${id}.json`);
    const data = await api.json();
    setConteudo(data);
  }

  
  useEffect(() => {
    conteudos();
    const value = localStorage.getItem("simplifica:token")
    if(!value ) router('/entrar')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const progressBar = () => setWidth(width + widthElement);

  const backProgress = () => setWidth(width - widthElement);

  // useEffect(() => {
  //   barra.current!.style.width = `${width}%`;
  // }, [width]);

  useEffect(() => {
    progressBar();
  }, []);


  function avancar() {
    if (assuntoAtual < conteudo.length - 1) {
      setAssuntoAtual(assuntoAtual + 1);
      progressBar();
    }
  }

  function voltar() {
    if (assuntoAtual !== 0) {
      setAssuntoAtual(assuntoAtual - 1);
      backProgress();
    }
  }

  const navigate = useNavigate()
  function finalizar(){
    setPontos(pontos + 1)
    navigate('/')
  }


  


  return (
    <>
      
      {conteudo[0] ? 
      <div className={styles.container_conteudo}>
          <div className={styles.conteudo}>
            <div className={styles.miniHeader}>
                <h1>{conteudo[assuntoAtual].titulo}</h1>
                <div className={styles.barradeProgresso}>
                  <div className={styles.progresso} ref={barra}></div>
                </div>
                <Link to={"/"}>
                  <IconClose width={30} height={30} color="#000000" />
              </Link>
            </div>


                  <Component1/>
            
                  {/* <Component2/> */}
            
                  {/* <Component3/> */}
            
                  {/* <Component4/> */}
            
                    <OpcoesAprender
              avancar={avancar}
              voltar={voltar}
              assuntoAtual={assuntoAtual}
              conteudo={conteudo}
              finalizar={finalizar}
            />
          </div>


      </div>
       :
       <Carregamento/>  
    }
      
    </>
  );
};

export default Aprender;
