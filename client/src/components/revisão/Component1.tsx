
import styles from '../../styles/aprender/Component1.module.css'
import { conteudos } from '../../types/conteudos';


type props = {
    data: conteudos
}


const Component1 = ({data}: props) => {

    

    return ( 
        <div className={styles.component1}>
           
        {/* <section className={styles.header}>

            <h2>
                Estruturas de Repetição

            </h2>

            <p>
            Atualmente nós temos 3 principais tipos de estruturas de repetição, que estarão 
            representadas nas imagens a seguir: 
            </p>

        </section> */}
        <hr/>
        <section className={styles.explicacao} >

            <div
                className={styles.esquerda}
            >
                    <h3>
                    {data.img1_titulo}
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                    </h3>
                    <img src={`${data.img1_url}`} alt={`${data.img1_alt}`} className={styles.imagem}/>
            </div >
            <div className={styles.barra}/>
            <div
            className={styles.direita}
            >
                <p>
                {data.paragrafo}
                </p>
            </div >
                    
        </section>
        </div>
     );
}
 
export default Component1;