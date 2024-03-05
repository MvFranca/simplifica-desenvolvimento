import styles from '../../styles/aprender/Component3.module.css'

const Component3 = () => {
    return ( 
        <div className={styles.component3}>
            <div className={styles.esquerda}>

                <h2>
                    Condicional “if”
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                </h2>

                <img src="/aprenda/imagem-teste.png" alt="" className={styles.imagem}/>

                <p>
                A variável i indica o valor inicial do loop, que nesse caso é 0.
                O segundo parâmetro indica a condição para que o loop aconteça;
                O terceiro parâmetro indica o valor que será somado a variável i após cada repetição.   
                </p>

            </div>

            <div className={styles.barra}/>

            <div className={styles.direita}>
                
                <h2>
                    Condicional “switch”
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                </h2>

                <img src="/aprenda/imagem-teste.png" alt="" className={styles.imagem}/>

                <p>
                A variável i indica o valor inicial do loop, que nesse caso é 0.
                O segundo parâmetro indica a condição para que o loop aconteça;
                O terceiro parâmetro indica o valor que será somado a variável i após cada repetição.   
                </p>

            </div>
        </div>
     );
}
 
export default Component3;