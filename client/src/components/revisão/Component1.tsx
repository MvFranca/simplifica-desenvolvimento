import styles from '../../styles/aprender/Component1.module.css'

const Component1 = () => {
    return ( 
        <div className={styles.component1}>
           
           <div className={styles.header}>

                <h2>
                    Estruturas de Repetição

                </h2>

                <p>
                Atualmente nós temos 3 principais tipos de estruturas de repetição, que estarão 
                representadas nas imagens a seguir: 
                </p>

           </div>


           <div className={styles.explicacao}>


            <div className={styles.esquerda}>

                <h3>
                Laço de repetição FOR
                <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />

                </h3>

                <img src="/aprenda/imagem-teste.png" alt="" className={styles.imagem}/>

            </div>

            <div className={styles.barra}/>

            <div className={styles.direita}>

                <p>
                O laço FOR é composto por três parâmetros.
                </p>

                <p> 
                A variável i indica o valor inicial do loop, que nesse caso é 0.
                O segundo parâmetro indica a condição para que o loop aconteça;
                O terceiro parâmetro indica o valor que será somado a variável i após cada repetição.
                </p>

            </div>


           </div>


        </div>
     );
}
 
export default Component1;