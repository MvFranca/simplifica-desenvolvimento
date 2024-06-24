import IconClose from "../icons/IconClose";

import styles from "../../styles/home/Pergunta.module.css";
import { Link } from "react-router-dom";
import OpcoesPergunta from "./opcoesPergunta";
import { useEffect, useRef, useState } from "react";
import Acertos from "../acertos/Acertos";
import { dados } from "../../types/dados";

type props = {
  assunto: Array<dados>;
  totalQuestions: number;
};

const Pergunta = ({ assunto, totalQuestions }: props) => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [questoesRestantes] = useState(totalQuestions);
  const [Width, setWidth] = useState(10);
  const progresso = useRef<HTMLDivElement>(null);
  const alternativas = useRef<HTMLDivElement>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);

  const resposta = {
    assinalada: 0,
  };

  function progressBar() {
    const porcentagemPorQues = 100 / questoesRestantes;
    setWidth(Width + porcentagemPorQues);

    progresso.current!.style.width = `${Width}%`;
  }

  function Assinalada(veracidade: number) {
    resposta.assinalada = veracidade;
  }


  function limpar(){
    const inputs = Array.from(alternativas.current!.getElementsByTagName("input"))
    inputs.map(input => {
    if(input.checked){

    input.checked = false
    }
    })
  }
  
  function confirmar() {
    
    const inputs = Array.from(alternativas.current!.getElementsByTagName("input"))
    inputs.map(input => {
    if(input.checked){

    if (resposta.assinalada == assunto[perguntaAtual].respostas.alternativa_correta) {
      setAcertos(acertos + 1);
    }
    setPerguntaAtual(perguntaAtual + 1);
    progressBar();

    input.checked = false
    }
    })

  }

  function finalizar() {
    if (resposta.assinalada == assunto[perguntaAtual].respostas.alternativa_correta) {
      setAcertos(acertos + 1);
    }
    progressBar();
    progressBar();
    setTimeout(() => {
      setFim(true);
    }, 500);
  }

  useEffect(() => {
    progressBar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.info}>
          <Link to={"/"}>
            <IconClose width={30} height={30} color="#000000" />
          </Link>
          <div className={styles.acertividade}>
            <div className={styles.acertos} ref={progresso}></div>
          </div>
        </div>

        {!fim ? (
          <div className={styles.perguntas}>
            <h2>{assunto[perguntaAtual].pergunta}</h2>

            <div className={styles.alternativas}  ref={alternativas}>

               <div
                id="A"
                onClick={() =>
                  Assinalada(1)
                }
              >
    
                <input type="radio" name="teste" id="a" />
                <label htmlFor="a">
                  {assunto[perguntaAtual].respostas.alternativa1}
                </label>

              </div>
              <div
                id="B"
                onClick={() =>
                  Assinalada(2)
                }
              >
                
                <input type="radio" name="teste" id="b" />
                <label htmlFor="b">
                  {" "}
                  {assunto[perguntaAtual].respostas.alternativa2}

                </label>

              </div>

              <div
                id="C"
                onClick={() =>
                  Assinalada(3)
                  }
                  >

                <input type="radio" name="teste" id="c" />
                <label htmlFor="c">
                  {" "}
                  {assunto[perguntaAtual].respostas.alternativa3}

                </label>

              </div>
                  

              <div
              id="D"
              onClick={() =>
                Assinalada(4)
              }>
      
                <input type="radio" name="teste" id="d" />
                <label htmlFor="d">
                  {" "}
                  {assunto[perguntaAtual].respostas.alternativa4}

                </label>

              </div>   
            </div>
          </div>
        ) : (
          <Acertos acertos={acertos} quantidadeQuestoes={totalQuestions -1} />
        )}

        <OpcoesPergunta
          confirmar={confirmar}
          perguntaAtual={perguntaAtual+1}
          setPerguntaAtual={setPerguntaAtual}
          assunto={assunto}
          finalizar={finalizar}
          fim={fim}
          limpar = {limpar}
        />
      </div>
    </section>
  );
};

export default Pergunta;
