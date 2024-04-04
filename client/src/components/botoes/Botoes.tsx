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
};

const Botoes = ({ id, conteudo }: props) => {
  const { setVariaveis, variaveis } = useContext(pointContext);
  const botoes = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
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


        <Link to={""} className={`botao${id}`} onClick={() => show()} >
          <IconPlayFill width={30} height={30} />
        </Link>

        <Rodal visible={visible} onClose={hide} className="modal">
          <h2>Bem-Vindo ao módulo de <strong>{conteudo}</strong></h2>
          <p>
           Este será o primeiro módulo de muitos, prepare-se para ingressar neste universo incrível! 
          </p>
          <img src="./trilha/modal-gif.gif" alt="" />
        </Rodal>

        <Link to={`/aprender/${id}`} className={`botao1`} id="poucoCurvado">
          <img src="./livro.png" alt="Livro" />
        </Link>

        <Link to={`/jogar/${id}`} className={`botao1`} id="muitoCurvado">
          <img src="./cerebro.png" alt="Cérebro" />
        </Link>

        <Link to={""} className={`botao1`} id="poucoCurvado">
          <img src="./bau.png" alt="Baú" />
        </Link>

        <Link to={ `/ordenacao/${id}`} className={`botao1`}>
          <img src="./programar.png" alt="Icone de programação" />
        </Link>

        <Link to={""} className={`botao1`}>
          <img src="./trofeu.png" alt="Troféu" />
        </Link>
      </div>
    </div>
  );
};

export default Botoes;
