import styles from '../../styles/home/Aprender.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
// import Revisao from "../../components/revisão/Revisao";
import { conteudos } from '../../types/conteudos';
import Carregamento from '../../components/carregamento/Carregamento';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Component1 from '../../components/revisão/Component1';
import IconClose from '../../components/icons/IconClose';

import { pointContext } from '../../context/context';
import OpcoesAprender from '../../components/revisão/OpcoesAprender';
import Component2 from '../../components/revisão/Component2';
import Component3 from '../../components/revisão/Component3';
import Component4 from '../../components/revisão/Component4';
import { api } from '../../services/api';

const Aprender = () => {
  const { setPontos, pontos } = useContext(pointContext);

  const [conteudo, setConteudo] = useState<Array<conteudos>>([]);
  const barra = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(10);
  const [assuntoAtual, setAssuntoAtual] = useState(0);
  const widthElement: number = 100 / (conteudo.length - 1);
  const [typeComponent, setTypeComponent] = useState(1);

  const { id } = useParams();
  const router = useNavigate();

  async function conteudos() {
    api.get(`/aprender/conteudo/${id}`).then((res) => {
      setConteudo(res.data);
    });
  }

  useEffect(() => {
    conteudos();
    const value = localStorage.getItem('simplifica:token');
    if (!value) router('/entrar');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const conteudoAtual = conteudo[assuntoAtual];

    if (conteudoAtual) {
      const componente4 =
        conteudoAtual.paragrafo &&
        conteudoAtual.subtitulo &&
        conteudoAtual.titulo &&
        !conteudoAtual.img1_url;
      const componente3 =
        conteudoAtual.img1_url &&
        conteudoAtual.img2_url &&
        !conteudoAtual.subtitulo;
      const componente2 =
        conteudoAtual.img1_url &&
        !conteudoAtual.img2_url &&
        conteudoAtual.paragrafo &&
        !conteudoAtual.subtitulo;
      const componente1 =
        conteudoAtual.img1_url &&
        !conteudoAtual.img2_url &&
        conteudoAtual.subtitulo;

      componente4
        ? setTypeComponent(4)
        : componente3
        ? setTypeComponent(3)
        : componente2
        ? setTypeComponent(2)
        : componente1 && setTypeComponent(1);
    }
  }, [conteudo, assuntoAtual]);

  const progressBar = () => {
    if (conteudo.length > 0) {
      setWidth((prev) => prev + widthElement);
    }
  };

  const backProgress = () => {
    if (conteudo.length > 0) {
      setWidth(width - widthElement);
    }
  };

  useEffect(() => {
    console.log('width');
    console.log(width);
    if (barra.current) {
      barra.current.style.width = `${width}%`;
    }
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

  const navigate = useNavigate();
  function finalizar() {
    setPontos(pontos + 1);
    navigate('/');
  }

  return (
    <>
      {conteudo[assuntoAtual] ? (
        <div className={styles.container_conteudo}>
          <div className={styles.conteudo}>
            <div className={styles.miniHeader}>
              <h1>{conteudo[assuntoAtual].titulo}</h1>
              <div className={styles.barradeProgresso}>
                <div className={styles.progresso} ref={barra}></div>
              </div>
              <Link to={'/'}>
                <IconClose width={30} height={30} color="#000000" />
              </Link>
            </div>

            {typeComponent == 1 ? (
              <Component1 data={conteudo[assuntoAtual]} />
            ) : typeComponent == 2 ? (
              <Component2 data={conteudo[assuntoAtual]} />
            ) : typeComponent == 3 ? (
              <Component3 data={conteudo[assuntoAtual]} />
            ) : (
              typeComponent == 4 && <Component4 data={conteudo[assuntoAtual]} />
            )}

            <OpcoesAprender
              avancar={avancar}
              voltar={voltar}
              assuntoAtual={assuntoAtual}
              conteudo={conteudo}
              finalizar={finalizar}
            />
          </div>
        </div>
      ) : (
        <Carregamento />
      )}
    </>
  );
};

export default Aprender;
