import { useNavigate } from 'react-router-dom';
import styles from '../../styles/estudoManual/Conteudo.module.css'


type props = {
    titulo: string;
    descricao: string;
    id: number;
}

const Conteudo = ({titulo, descricao, id}: props) => {

    const routes = useNavigate()

    return ( 

        <div className={styles.conteudo}>
            <h2>{titulo}</h2>
            <p>
                {descricao}
            </p>
            <button onClick={()=> {routes(`/aprender/${id}`)}}>
                ACESSAR
            </button>
        </div>
     );
}
 
export default Conteudo;