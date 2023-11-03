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
            <button>VER DÚVIDA</button>
        </div>
     );
}
 
export default Duvida;