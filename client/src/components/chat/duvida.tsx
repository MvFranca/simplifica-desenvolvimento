import { Link } from 'react-router-dom';
import styles from '../../styles/comunidade/Duvida.module.css'

const Duvida = () => {
    return ( 
        <div className={styles.duvida}>
             <div className={styles.textos}>
                 <h3>
                    Váriáveis
                 </h3>
                    <p>
                        Tive problemas ao definir as váriaveis dentro do vscode...
                    </p>
             </div>
            <Link to={'/teste'}>VER DÚVIDA</Link>
        </div>
     );
}
 
export default Duvida;