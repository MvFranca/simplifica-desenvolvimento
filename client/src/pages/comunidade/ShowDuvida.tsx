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
  const { id } = useParams();

  //* states
  const [duvida, setDuvida] = useState<IDuvida>();

  //* effects
  useEffect(() => {
    const fetchDuvida = () => {
      console.log("pegando dados de duvida...");

      const response = {
        id: 123,
        data: new Date(),
        descricao: "alguma coisa",
        titulo: "Código JavaScript sem funcionar",
        tituloConteudo: "Variáveis",
        user: {
          id_usuario: 1234,
          email: "joao@email.com",
          fullname: "João da Silva",
          senha: "123",
          turma: "921",
          url_image: "url",
          username: "joao",
        },
      } as IDuvida;
      setDuvida(response);
    };

    fetchDuvida();
  }, []);

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
          sla {id} {duvida?.data.toString()}
        </div>
      </div>

      <FormChat />
    </div>
  );
};

export default ShowDuvida;
