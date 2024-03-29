import styles from '../../styles/comunidade/DuvidaEspecifica.module.css'

const DuvidaEspecifica = () => {
    return ( 
        <div className={styles.duvidaEspecifica}>

            <div className={styles.cabecalho}>

                <div className={styles.esquerda}>
                    <h3>
                    marcos_vinicius
                    </h3>
                    
                    <div className={styles.dados}>
                        <span>Data:</span> 18/05
                    </div>

                    <div className={styles.dados}>
                        <span>Turma:</span> 911
                    </div>

                </div>
                
                <div className={styles.direita}>

                    <span className={styles.visto}>
                        Visto
                    </span>

                    <div>
                        <span>Conteúdo: </span>Variáveis
                    </div>

                </div>

            </div>

            <section className={styles.duvida}>

                <h1>
                Código JavaScript sem funcionar
                </h1>

                <p>
                Fiz uma estrutura básica de loop e meu código não está funcionando. Abaixo deixarei a imagem anexada com o código.
                </p>

                <hr />

                <img src="./duvida-teste.svg" alt="" />

                <hr />

                <div className={styles.botoes}>

                    <button className={styles.ver}>VER A RESPOSTA</button>

                    <button className={styles.responder}>+ RESPONDER</button>

                </div>

            </section>
        </div>
     );
}
 
export default DuvidaEspecifica;