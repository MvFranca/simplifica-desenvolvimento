import { useContext, useEffect, useRef, useState } from "react";
import "../../styles/home/Botoes.css";
import IconPlayFill from "../icons/IconPlay";
import { Link } from "react-router-dom";
import { pointContext } from "../../context/context";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

type props = {
  id: number;
  conteudo: string;
};

const Botoes = ({ id, conteudo}: props) => {

  //progresso dos botões, que também virá do db
  // esse estado será atualizado com o valor que está no db
  const { setVariaveis, variaveis,  myProgress, setMyProgress, progressoBotoes, setProgressoBotoes } = useContext(pointContext);


  // useEffect(() => {

  //   setStatus(iniciado)

  // },[iniciado])

  // useEffect(() => {

  //   setProgressoBotoes(avanco)

  // },[avanco])



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

  const show = (disponivel: boolean, indice:number) => {
    if(disponivel && indice == progressoBotoes){
      setVisible(true);
      setProgressoBotoes(progressoBotoes + 1)
   }
  }

  function avancar(disponivel: boolean, indice:number) {
    if(disponivel && indice == progressoBotoes){
      setProgressoBotoes(progressoBotoes + 1)

      if(indice == listaBotoes.length-1){
        setMyProgress(myProgress + 1)
        setProgressoBotoes(0)
      }

    }
  }

  useEffect(() => {
    console.log(myProgress)
  }, [myProgress])


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
          // progressoBotoes >= index ? botao.to :
          // progressoBotoes >= index  ? "botao-habilitado" : 

          const url =  myProgress > id  ? botao.to : myProgress == id && progressoBotoes >= index ?  botao.to : ''

          const classe =  myProgress > id  ? "botao-habilitado" : myProgress == id && progressoBotoes >= index ? "botao-habilitado" : "botao-desabilitado"

          const disponivel =  myProgress >= id  && progressoBotoes >= index

          return(
            index != 0 ?
            <Link to={url} id={botao.id}  className={classe} onClick={() => avancar(disponivel, index)} >
              <img src={botao.src} alt={botao.alt} />
            </Link>
            :
            <Link to={""} className={classe} onClick={() => show(disponivel, index)} >
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
