import { useContext, useEffect, useRef, useState } from "react";
import "../../styles/home/Botoes.css";
import IconPlayFill from "../icons/IconPlay";
import { Link } from "react-router-dom";
import { pointContext } from "../../context/context";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import IconFire from "../icons/IconFire";
import axios from "axios";
import IconDiamond from "../icons/IconDiamond";

type props = {
  id: number;
  conteudo: string;
};

const Botoes = ({ id, conteudo}: props) => {

  const { variaveis,  myProgress, setMyProgress, progressoBotoes, setProgressoBotoes, controle, setFogo, fogo, setPontos, pontos } = useContext(pointContext);

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

  const [modalBau, setModalBau] = useState(false);

  const [modalTrofeu, setModalTrofeu] = useState(false);

  const [ganhoFogo, setGanhoFogo] = useState(0)
  const [ganhoDiamante, setGanhoDiamante] = useState(0)

  const show = (disponivel: boolean, indice:number) => {
    if(disponivel && indice == progressoBotoes){
      setVisible(true);
      controle.current = true
      setProgressoBotoes(prev => prev  +1)
   }
  }

  
  function abrirBau(){

    const pontosGanhos = 3

    setGanhoFogo(pontosGanhos)

    setModalBau(true)


    setFogo(fogo + pontosGanhos)
  }



  function abrirTrofeu(){
    const pontosGanhos = 3

    setModalTrofeu(true)

    setGanhoFogo(pontosGanhos)
    setGanhoDiamante(pontosGanhos)

    setFogo(fogo + pontosGanhos)
    setPontos(pontos + pontosGanhos)
  }


  useEffect(() => {
 
   
    if(modalBau){
      const user = localStorage.getItem("simplifica:user")!;
      const userObject = JSON.parse(user);
      const idUser = Number(userObject.id_usuario);
      
      axios.put("http://localhost:8000/api/points/updateFogo", {idUser, fogo}).then((res) => {
        console.log(res)
      }).catch((err:Error) => {
        console.log(err)
      })

    } 

  }, [fogo, modalBau])




  useEffect(()=> {


    if(modalTrofeu){
      const user = localStorage.getItem("simplifica:user")!;
      const userObject = JSON.parse(user);
      const idUser = Number(userObject.id_usuario);

      axios.put("http://localhost:8000/api/points/updateDiamantes", {idUser, pontos}).then((res) => {
        console.log(res)
      }).catch((err:Error) => {
        console.log(err)
      })

      axios.put("http://localhost:8000/api/points/updateFogo", {idUser, fogo}).then((res) => {
        console.log(res)
      }).catch((err:Error) => {
        console.log(err)
      })
    }

  }, [ pontos, modalTrofeu])



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
        abrirTrofeu()
      }



    }
  }

  useEffect(() => {
    console.log(myProgress)
  }, [myProgress])


  const hide = () => {
    setVisible(false);
    setModalBau(false)
    setModalTrofeu(false)
    setGanhoFogo(0)
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

              <div>
                <IconFire width={25} height={25} color="rgb(255, 126, 66)" />
                {ganhoFogo}
              </div>

            </div>

          <img src="./trilha/modal-gif.gif" alt="" className="confetes" />
        </Rodal>

        <Rodal visible={modalTrofeu} onClose={hide}  className="modal modal-trofeu">
          <h2>
            Parabéns por chegar até aqui!<strong> Você acabou de ganhar </strong>
          </h2>

          <div className="ganhos-trofeu">
              <img src="./bau-aberto.webp" alt="Baú Aberto" className="bau-aberto"/>

              <div className="pontos-ganhos">

                <strong className="fogo">
                  <IconFire width={25} height={25} color="rgb(255, 126, 66)" />
                  {ganhoFogo} 
                </strong>
                <strong className="diamante">
                  <IconDiamond width={25} height={25}  />
                  {ganhoDiamante} 
                </strong>

              </div>

            </div>

          <img src="./trilha/modal-gif.gif" alt="" className="confetes" />
        </Rodal>

        {

        listaBotoes.map( (botao, index) => {

          const url =  myProgress > id  ? botao.to : myProgress == id && progressoBotoes >= index ?  botao.to : ''

          const classe =  myProgress > id  ? "botao-habilitado" : myProgress == id && progressoBotoes == index && index !=0 ? 'botao-atual' : myProgress == id && progressoBotoes >= index  ? `botao-habilitado`: "botao-desabilitado"

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
