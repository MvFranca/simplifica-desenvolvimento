import styles from "../../styles/comunidade/Chat.module.css";
import DuvidaCard from "./duvida";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <section className={styles.infoDuvidas}>
        <div className={styles.infoData}>
          <span className={styles.data}>18/01</span>
          <span className={styles.borda} />
        </div>

        <div className={styles.fullDuvidas}>
          <span className={styles.setaEsquerda}>
            <img src="icon-arrow.png" alt="seta" />
          </span>
          <div>
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 2,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 3,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 4,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
          </div>
          <span className={styles.setaDireita}>
            <img src="icon-arrow.png" alt="seta" />
          </span>
        </div>
      </section>

      <section className={styles.infoDuvidas}>
        <div className={styles.infoData}>
          <span className={styles.data}>13/01</span>
          <span className={styles.borda} />
        </div>

        <div className={styles.fullDuvidas}>
          <span className={styles.setaEsquerda}>
            <img src="icon-arrow.png" alt="seta" />
          </span>
          <div>
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
          </div>
          <span className={styles.setaDireita}>
            <img src="icon-arrow.png" alt="seta" />
          </span>
        </div>
      </section>

      <section className={styles.infoDuvidas}>
        <div className={styles.infoData}>
          <span className={styles.data}>07/01</span>
          <span className={styles.borda} />
        </div>

        <div className={styles.fullDuvidas}>
          <span className={styles.setaEsquerda}>
            <img src="icon-arrow.png" alt="seta" />
          </span>
          <div>
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
          </div>
          <span className={styles.setaDireita}>
            <img src="icon-arrow.png" alt="seta" />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Chat;