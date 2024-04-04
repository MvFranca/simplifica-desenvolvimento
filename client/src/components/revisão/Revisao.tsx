/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/home/Aprender.module.css";
import { conteudos } from "../../types/conteudos";
import IconClose from "../icons/IconClose";
import OpcoesAprender from "./OpcoesAprender";
import { useContext, useEffect, useRef, useState } from "react";

type props = {
  conteudo: Array<conteudos>;
};

import { pointContext } from "../../context/context";

const Revisao = ({ conteudo }: props) => {

  const {setPontos, pontos} = useContext(pointContext)

  const barra = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [assuntoAtual, setAssuntoAtual] = useState(0);
  const widthElement: number = 100 / conteudo.length;

  const progressBar = () => setWidth(width + widthElement);

  const backProgress = () => setWidth(width - widthElement);

  useEffect(() => {
    barra.current!.style.width = `${width}%`;
  }, [width]);

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
      <div className={styles.revisao}>
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
          <div className={styles.informacoes}>
            <h2>{conteudo[assuntoAtual].subtitulo}</h2>

            <div className={styles.dados}>
              <div className={styles.textos}>
                <p>{conteudo[assuntoAtual].paragrafo1}</p>
                <p>{conteudo[assuntoAtual].paragrafo2}</p>
              </div>

              <div className={styles.imagem}>
                <img src={conteudo[assuntoAtual].src} alt="" />
              </div>
            </div>
          </div>

          <OpcoesAprender
            avancar={avancar}
            voltar={voltar}
            assuntoAtual={assuntoAtual}
            conteudo={conteudo}
            finalizar={finalizar}
          />
        </div>
      </div>
    </>
  );
};

export default Revisao;
