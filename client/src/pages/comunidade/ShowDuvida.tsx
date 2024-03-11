import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDuvida } from "../../types/IDuvida";
import styles from "../../styles/comunidade/DuvidaShow.module.css";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import Header from "../../components/header/Header";
import FormChat from "../../components/chat/FormChat";

const ShowDuvida = () => {
  //* hooks
  const { id: duvidaId } = useParams();

  //* states
  const [duvida, setDuvida] = useState<IDuvida>();

  //* effects
  useEffect(() => {
    const fetchDuvida = () => {
      const response = {
        id: parseInt(duvidaId || ""),
        data: new Date(),
        descricao: "alguma coisa",
        titulo: "Código JavaScript sem funcionar",
        tituloConteudo: "Variáveis",
        url_image:
          "https://media.licdn.com/dms/image/D4D12AQH84dbg2sIFug/article-cover_image-shrink_720_1280/0/1691554879476?e=2147483647&v=beta&t=NW9dW-FK2spqCOYI1RYuBp5wmE_f2ouFxWZzXncPN5g",
        user: {
          id_usuario: 1234,
          email: "joao@email.com",
          fullname: "João da Silva",
          senha: "123",
          turma: "921",
          username: "joao",
        },
        respostas: [
          {
            user: "usuario",
            data: new Date(),
            descricao:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio totam vero sequi dignissimos, iure rem hic tempora. Et tempora asperiores tempore molestias? Non voluptatum reprehenderit repellat, velit est ullam sapiente!",
            url_image:
              "https://media.licdn.com/dms/image/D4D12AQH84dbg2sIFug/article-cover_image-shrink_720_1280/0/1691554879476?e=2147483647&v=beta&t=NW9dW-FK2spqCOYI1RYuBp5wmE_f2ouFxWZzXncPN5g",
          },
        ],
      } as IDuvida;
      setDuvida(response);
    };

    fetchDuvida();
  }, [duvidaId]);

  //* render
  return (
    <div className={styles.container}>
      <MenuMobile />
      <MenuTopo />
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.content}>
        <div className={styles.containerBox}>
          <div className={styles.infoLeft}>
            <h3 className={styles.username}>{duvida?.user.username}</h3>
            <p className={styles.dataLabel}>
              <span>Data:</span> {duvida?.data.toLocaleString()}
            </p>
            <p className={styles.dataLabel}>
              <span>Turma:</span> {duvida?.user.turma}
            </p>
          </div>
          <div className={styles.infoRight}>
            <button className={styles.btnGray}>
              <span>Visto</span>
            </button>
            <p className={styles.dataLabel}>
              <span>Conteúdo:</span>
              <a href=""> {duvida?.tituloConteudo}</a>
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
            <img
              className={styles.image}
              src={duvida?.url_image}
              alt={duvida?.titulo}
            />
            <div className={styles.line}></div>
          </div>
          <div className={styles.spaceBetween}>
            <button className={styles.btnBlue}>
              {duvida?.respostas?.length} Ver a
              {duvida?.respostas && duvida?.respostas?.length > 1 ? "s" : ""}{" "}
              resposta
              {duvida?.respostas && duvida?.respostas?.length > 1
                ? "s"
                : ""}{" "}
            </button>
            <button className={styles.btnBlack}>Responder</button>
          </div>
        </div>
        {duvida?.respostas &&
          duvida?.respostas.map((resposta) => {
            return (
              <div className={styles.respostaContainer}>
                <div className={styles.spaceBetween}>
                  <h3 className={styles.title}>Resposta</h3>
                  <div className={styles.respostaRightInfo}>
                    <p className={styles.respostaDataLabel}>
                      {resposta.data && resposta.data.toLocaleString()}
                    </p>
                    <p className={styles.username}>
                      <span>{resposta.user}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.line}></div>
                <img
                  className={styles.image}
                  src={resposta.url_image}
                  alt={resposta.user + "image"}
                />
              </div>
            );
          })}
      </div>
      <FormChat />
    </div>
  );
};

export default ShowDuvida;
