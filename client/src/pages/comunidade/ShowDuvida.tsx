import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IComentario, IDuvida } from '../../types/IDuvida';
import styles from '../../styles/comunidade/ShowDuvida.module.css';
import ImagemComModal from '../../components/ImagemComModal';
import FormResposta from './FormReposta';
import { formatDate } from '../../helpers/formatDate';
import { api } from '../../services/api';

const ShowDuvida = () => {
  //* hooks
  const { id } = useParams();

  //* states
  const [duvida, setDuvida] = useState<IDuvida>();
  const [comentarios, setComentarios] = useState<IComentario[]>([]);

  const [formRespostas, setFormRespostas] = useState(false);

  const [novaResposta, setNovaResposta] = useState(false);

  async function respostas(id_duvida: string) {
    try {
      api.get(`/community/duvidas/${id_duvida}/comentarios`).then((res) => {
        setComentarios(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function dadosDuvida(id_duvida: string) {
    try {
      api.get(`/community/duvidas/${id_duvida}`).then((res) => {
        setDuvida(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    respostas(id!);

    if (novaResposta) {
      setNovaResposta(false);
    }
  }, [id, novaResposta]);

  useEffect(() => {
    dadosDuvida(id!);
  }, [id]);

  const abrirFormResposta = () => setFormRespostas(!formRespostas);

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.containerBox}>
          <div className={styles.infoLeft}>
            <h3 className={styles.username}>{duvida?.usuario.username}</h3>
            <p className={styles.dataLabel}>
              {/* <span>Data:</span> {duvida?.data && formatDate(duvida?.data)} */}
              <span>Data: {formatDate(String(duvida?.createdAt))}</span>
            </p>
            <p className={styles.dataLabel}>
              <span>Turma:</span> {duvida?.usuario.turma}
            </p>
          </div>
          <div className={styles.infoRight}>
            <button className={styles.btnGray}>
              {comentarios.length > 0 ? (
                <span>Visto</span>
              ) : (
                <span style={{ color: 'red' }}>Não visto</span>
              )}
            </button>
            <p className={styles.dataLabel}>
              <span>Conteúdo:</span>
              <a href=""> {duvida?.conteudo}</a>
            </p>
          </div>
        </div>
        <div className={styles.caixaDuvidaContainer}>
          <div className={styles.caixaDuvidaContainer}>
            <h1 className={styles.title}>{duvida?.titulo}</h1>
            <p className={styles.description}>{duvida?.descricao}</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.caixaDuvidaContainer}>
            {duvida?.img_url && (
              <>
                <ImagemComModal
                  src={duvida.img_url}
                  alt={duvida?.titulo}
                  classNameImagem={styles.image}
                />
                <div className={styles.line}></div>
              </>
            )}
          </div>
          <div className={styles.spaceBetween}>
            <button className={styles.btnBlue}>
              {comentarios.length} Ver a
              {comentarios && comentarios.length > 1 ? 's' : ''} resposta
              {comentarios && comentarios.length > 1 ? 's' : ''}{' '}
            </button>
            <button className={styles.btnBlack} onClick={abrirFormResposta}>
              Responder
            </button>
          </div>
        </div>

        {formRespostas && (
          <FormResposta
            state={setFormRespostas}
            novaResposta={setNovaResposta}
            formRespostas={formRespostas}
          />
        )}
        {comentarios &&
          comentarios
            .slice()
            .reverse()
            .map((resposta) => {
              return (
                <div className={styles.respostaContainer}>
                  <div className={styles.spaceBetween}>
                    <h3 className={styles.title}>Resposta</h3>
                    <div className={styles.respostaRightInfo}>
                      <p className={styles.respostaDataLabel}>
                        {/* {resposta.data && formatDate(resposta.data)} */}
                        {resposta.hora_comentario}
                      </p>
                      <p className={styles.username}>
                        <span>{resposta.usuario?.username}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <p className={styles.description}>{resposta.descricao}</p>
                  {resposta.img_url && (
                    <ImagemComModal
                      src={resposta.img_url}
                      alt={resposta.username + ' image'}
                      classNameImagem={styles.image}
                    />
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ShowDuvida;
