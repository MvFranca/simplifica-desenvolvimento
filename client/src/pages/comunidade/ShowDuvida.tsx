import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IComentario, IDuvida } from '../../types/IDuvida';
import styles from '../../styles/comunidade/ShowDuvida.module.css';
import ImagemComModal from '../../components/ImagemComModal';
import FormResposta from './FormReposta';
import { formatDate } from '../../helpers/formatDate';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import CarregamentoGif from '../../components/carregamentoGif';

const ShowDuvida = () => {
  //* hooks
  const { id } = useParams();
  const router = useNavigate();

  //* states
  const [duvida, setDuvida] = useState<IDuvida>();
  const [comentarios, setComentarios] = useState<IComentario[]>([]);
  const [formRespostas, setFormRespostas] = useState(false);
  const [novaResposta, setNovaResposta] = useState(false);

  useEffect(() => {
    const fetchRespostas = async () => {
      try {
        const { data } = await api.get(`/community/duvidas/${id}/comentarios`);
        setComentarios(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRespostas();

    if (novaResposta) {
      setNovaResposta(false);
    }
  }, [id, novaResposta]);

  useEffect(() => {
    const fetchDadosDuvida = async () => {
      try {
        const { data } = await api.get(`/community/duvidas/${id}`);
        setDuvida(data.data);
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          toast.error('Dúvida não encontrada!');
        }
        router('/comunidade');
      }
    };

    fetchDadosDuvida();
  }, [id]);

  const abrirFormResposta = () => setFormRespostas(!formRespostas);

  return (
      <div className={styles.content}>

        {
          duvida ?
          <>
          <div className={styles.containerBox}>
              <div className={styles.infoLeft}>
                <h3 className={styles.username}>{duvida?.usuario?.username}</h3>
                <p className={styles.dataLabel}>
                  <span>Data: {formatDate(String(duvida?.createdAt))}</span>
                </p>
                <p className={styles.dataLabel}>
                  <span>Turma:</span> {duvida?.usuario?.turma}
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
                  {comentarios && comentarios.length} Ver a
                  {comentarios && comentarios.length > 1 ? 's' : ''} resposta
                  {comentarios && comentarios.length > 1 ? 's' : ''}{' '}
                </button>
                <button className={styles.btnBlack} onClick={abrirFormResposta}>
                  Responder
                </button>
              </div>
            </div>
          
          </>
          :
          <CarregamentoGif/>
        }

        

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
                <div key={resposta.id} className={styles.respostaContainer}>
                  <div className={styles.spaceBetween}>
                    <h3 className={styles.title}>Resposta</h3>
                    <div className={styles.respostaRightInfo}>
                      <p className={styles.respostaDataLabel}>
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
  );
};

export default ShowDuvida;
