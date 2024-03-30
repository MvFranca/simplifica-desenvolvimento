import { Link } from "react-router-dom";
import styles from "../../styles/comunidade/Duvida.module.css";
import { IDuvida } from "../../types/IDuvida";

interface DuvidaCardProps {
  duvida: Partial<IDuvida>;
}

const DuvidaCard = ({ duvida }: DuvidaCardProps) => {
  return (
    <div className={styles.duvida}>
      <div className={styles.textos}>
        <h3>{duvida.titulo}</h3>
        <p>{duvida.descricao}.</p>
      </div>
      <Link to={"/comunidade/duvida/" + duvida.id}>VER DÚVIDA</Link>
    </div>
  );
};

export default DuvidaCard;