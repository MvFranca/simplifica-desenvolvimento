import styles from '../../styles/aprender/Component3.module.css'
import { conteudos } from '../../types/conteudos';
import ImagemComModal from '../ImagemComModal';

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

                <div className={styles.imagem}  >
                    {/* <img src={`${data.img1_url}`} alt={`${data.img1_alt}`}/> */}
                    <ImagemComModal
                    src={`${data.img1_url}`}
                    alt={data.img1_alt + " image"}
                    classNameImagem={styles.imagem}
                  />
                </div>

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
                
                <div  className={styles.imagem}>
                    {/* <img src={`${data.img2_url}`} alt={`${data.img2_alt}`}/> */}
                    <ImagemComModal
                    src={`${data.img2_url}`}
                    alt={data.img2_alt + " image"}
                    classNameImagem={styles.imagem}
                  />
                </div>

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