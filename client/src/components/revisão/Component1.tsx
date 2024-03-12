import { Carousel } from 'react-responsive-carousel';

import styles from '../../styles/aprender/Component1.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

const Component1 = () => {
    return ( 
        <div className={styles.component1}>
           
        <section className={styles.header}>

            <h2>
                Estruturas de Repetição

            </h2>

            <p>
            Atualmente nós temos 3 principais tipos de estruturas de repetição, que estarão 
            representadas nas imagens a seguir: 
            </p>

        </section>
        <hr/>
        <section className={styles.explicacao} >

            <div
                className={styles.esquerda}
            >
                    <h3>
                    Laço de repetição FOR
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                    </h3>
                    <img src="/aprenda/imagem-teste.png" alt="" className={styles.imagem}/>
            </div >
            <div className={styles.barra}/>
            <div
            className={styles.direita}
            >
                <p>
                O laço FOR é composto por três parâmetros.
                </p>
                <p>
                A variável i indica o valor inicial do loop, que nesse caso é 0.
                O segundo parâmetro indica a condição para que o loop aconteça;
                O terceiro parâmetro indica o valor que será somado a variável i após cada repetição.
                </p>
            </div >
                    
        </section>
        </div>
     );
}
 
export default Component1;