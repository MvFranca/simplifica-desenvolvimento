import { useContext, useEffect, useRef, useState } from "react";
import "../../styles/home/Botoes.css";
import IconPlayFill from "../icons/IconPlay";
import { Link } from "react-router-dom";
import { pointContext } from "../../context/context";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import IconFire from "../icons/IconFire";

type props = {
  id: number;
  conteudo: string;
};

const Botoes = ({ id, conteudo}: props) => {

  const { variaveis,  myProgress, setMyProgress, progressoBotoes, setProgressoBotoes, controle } = useContext(pointContext);

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

  const [modalBau, setModalBau] = useState(false)

  const show = (disponivel: boolean, indice:number) => {
    if(disponivel && indice == progressoBotoes){
      setVisible(true);
      controle.current = true
      setProgressoBotoes(prev => prev  +1)
   }
  }

  
  function abrirBau(){
    setModalBau(true)
  }

  function avancar(disponivel: boolean, indice:number, alt: string) {
    if(disponivel && indice == progressoBotoes){
      setProgressoBotoes(prev => prev + 1)
      controle.current = true
      
      if(alt == 'Baú'){
        abrirBau()
      }

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
    setModalBau(false)
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
          <img src="./trilha/modal-gif.gif" alt="confetes" className="confetes"/>
        </Rodal>

        <Rodal visible={modalBau} onClose={hide} className="modal modal-bau">
          <h2>
            Parabéns por chegar até aqui!<strong> Você acabou de ganhar </strong>
          </h2>

          <div className="ganhos">
              <img src="./bau-aberto.webp" alt="Baú Aberto" className="bau-aberto"/>

              <strong>
                <IconFire width={25} height={25} color="rgb(255, 126, 66)" />
                2
              </strong>

            </div>

          <img src="./trilha/modal-gif.gif" alt="" className="confetes" />
        </Rodal>

        {

        listaBotoes.map( (botao, index) => {

          const url =  myProgress > id  ? botao.to : myProgress == id && progressoBotoes >= index ?  botao.to : ''

          const classe =  myProgress > id  ? "botao-habilitado" : myProgress == id && progressoBotoes >= index ? "botao-habilitado" : "botao-desabilitado"

          const disponivel =  myProgress >= id  && progressoBotoes >= index

          return(
            index != 0 ?
            <Link to={url} id={botao.id}  className={classe} onClick={() => avancar(disponivel, index, botao.alt)} >
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
