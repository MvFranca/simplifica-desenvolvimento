import styles from '../../styles/aprender/Component3.module.css'
import { conteudos } from '../../types/conteudos';

type props = {
    data: conteudos
}

const Component3 = ({data}: props) => {
    return ( 
        <div className={styles.component3}>
            <div className={styles.esquerda}>

                <h2>
                    {data.img1_titulo}
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                </h2>

                <img src={`${data.img1_url}`} alt={`${data.img1_alt}`} className={styles.imagem}/>

                <p>
                {
                    data.img1_descricao
                }  
                </p>

            </div>

            <div className={styles.barra}/>

            <div className={styles.direita}>
                
                <h2>
                   {data.img2_titulo}
                    <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                </h2>

                <img src={`${data.img2_url}`} alt={`${data.img2_alt}`} className={styles.imagem}/>

                <p>
                {
                    data.img2_descricao
                }   
                </p>

            </div>
        </div>
     );
}
 
export default Component3;