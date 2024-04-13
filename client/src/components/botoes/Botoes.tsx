import { useContext, useEffect, useRef, useState } from "react";
import "../../styles/home/Botoes.css";
import IconPlayFill from "../icons/IconPlay";
import { Link } from "react-router-dom";
import { pointContext } from "../../context/context";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

type props = {
  id: string;
  conteudo: string;
  iniciado: boolean
  avanco: number
};

const Botoes = ({ id, conteudo, iniciado, avanco }: props) => {
  const { setVariaveis, variaveis } = useContext(pointContext);

  const [status, setStatus] = useState(false)
  const [progressoBotoes, setProgressoBotoes] = useState(0)

  useEffect(() => {

    setStatus(iniciado)

  },[iniciado])

  useEffect(() => {

    setProgressoBotoes(avanco)

  },[avanco])



  const listaBotoes = [
    {
      to: `/aprender/${id}`,
      id: "poucoCurvado",
      src: "",
      alt: ""
    },
    {
      to: `/aprender/${id}`,
      id: "poucoCurvado",
      src: "./livro.png",
      alt: "Livro"
    },
    {
      to: `/jogar/${id}`,
      id: "muitoCurvado",
      src: "./cerebro.png",
      alt: "Cérebro"
    },
    {
      to: "",
      id: "poucoCurvado",
      src: "./bau.png",
      alt: "Baú"
    },
    {
      to:  `/ordenacao/${id}`,
      id: "",
      src: "./programar.png",
      alt: "Ícone de programação"
    },
    {
      to: "",
      id: "",
      src: "./trofeu.png",
      alt: "Troféu"
    },

  ]

  const botoes = useRef<HTMLDivElement>(null);


  const [visible, setVisible] = useState(false);

  const show = () => {
    if(iniciado){
      setVisible(true);
      setProgressoBotoes(prev => prev + 1)
   }
  }

  function avancar(disponivel: boolean) {
    if(disponivel){
      setProgressoBotoes(prev => prev + 1)
    }
  }

  const hide = () => {
    setVisible(false);
  }


  function play(id: string) {
    if (id == "1") {
      setVariaveis(true);
    }
  }


  useEffect(() => {
    if (variaveis) {
      const teste = Array.from(botoes.current?.getElementsByTagName("a") ?? []);
      teste.forEach((botao) => {
        if (botao.className == "botao11") {
          botao.style.backgroundColor = "#268aff";
          botao.style.boxShadow = " 0px 6.5px 0px 0.5px #1e6ac2";
        }
      });
    }
  }, [variaveis]);

  return (
    <div>
      <div className="botoes" ref={botoes}>
        <Rodal visible={visible} onClose={hide} className="modal">
          <h2>Bem-Vindo ao módulo de <strong>{conteudo}</strong></h2>
          <p>
           Este será o primeiro módulo de muitos, prepare-se para ingressar neste universo incrível! 
          </p>
          <img src="./trilha/modal-gif.gif" alt="" />
        </Rodal>

        {

        listaBotoes.map( (botao, index) => {

          const url = status && progressoBotoes >= index ? botao.to : ''
          const classe = status && progressoBotoes >= index  ? "botao-habilitado" : "botao-desabilitado"
          const disponivel = status && progressoBotoes >= index

          return(
            index != 0 ?
            <Link to={url} id={botao.id}  className={classe} onClick={() => avancar(disponivel)} >
              <img src={botao.src} alt={botao.alt} />
            </Link>
            :
            <Link to={""} className={classe} onClick={() => show()} >
              <IconPlayFill width={30} height={30} />
            </Link>
          )
        })

        }

      </div>
    </div>
  );
};

export default Botoes;
