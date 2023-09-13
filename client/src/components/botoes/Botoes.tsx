import { useContext, useEffect, useRef } from "react";
import "../../styles/home/Botoes.css";
import IconPlayFill from "../icons/IconPlay";
import { Link } from "react-router-dom";
import { pointContext } from "../../context/context";

type props = {
  id: string;
};

const Botoes = ({ id }: props) => {
  const { setVariaveis, variaveis } = useContext(pointContext);
  const botoes = useRef<HTMLDivElement>(null);

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
        <Link to={""} className={`botao${id}`} onClick={() => play(id)}>
          <IconPlayFill width={30} height={30} />
        </Link>

        <Link to={`/aprender/${id}`} className={`botao1`} id="poucoCurvado">
          <img src="./livro.png" alt="Livro" />
        </Link>

        <Link to={`/jogar/${id}`} className={`botao1`} id="muitoCurvado">
          <img src="./cerebro.png" alt="Cérebro" />
        </Link>

        <Link to={""} className={`botao1`} id="poucoCurvado">
          <img src="./bau.png" alt="Baú" />
        </Link>

        <Link to={""} className={`botao1`}>
          <img src="./livro.png" alt="Livro" />
        </Link>

        <Link to={""} className={`botao1`}>
          <img src="./trofeu.png" alt="Troféu" />
        </Link>
      </div>
    </div>
  );
};

export default Botoes;
