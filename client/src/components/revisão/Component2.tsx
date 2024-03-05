import styles from '../../styles/aprender/Component2.module.css'

const Component2 = () => {
return ( 
        <div className={styles.component2}>
            
            <div className={styles.esquerda}>

                <h2>
                    Condicional “if”
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                </h2>

                <img src="/aprenda/imagem-teste.png" alt="" className={styles.imagem}/>

                <p>
                    Aqui nós temos isso isso isso isso isso fdsfdhsf  fsdfdsfhfhsd fdsfksdghfsdf fsdhfsdg sfsd fsdjk sd fdshf dskjf jkdsfjkfsd 
                </p>

            </div>

            <div className={styles.barra}/>

            <div className={styles.direita}>
                <p>
                    A variável i indica o valor inicial do loop, que nesse caso é 0.
                   verdade  i indica o valor inicial do loop, que nesse caso é de devariável i indica o valor ini sdfsdf sdaf f sdf sdfsdf asdfs 
                    
                </p>

                <p>
                    O segundo parâmetro indica a condição para que o loop aconteça;
                </p>

                <p>
                    O terceiro parâmetro indica o valor que será somado a variável i após cada repetição.
                </p>

            </div>

        </div>
     );
}
 
export default Component2;