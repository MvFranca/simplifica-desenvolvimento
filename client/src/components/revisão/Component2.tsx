import styles from '../../styles/aprender/Component2.module.css'
import { conteudos } from '../../types/conteudos';
import ImagemComModal from '../ImagemComModal';

                
type props = {
    data: conteudos
}


const Component2 = ({data}: props) => {
return ( 
        <div className={styles.component2}>
            {/* <h2>
                Condicional “if”
                <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
            </h2> */}
            
            <div className={styles.explicacao}>
                <div className={styles.esquerda}>
                    <h2>
                        {data.img1_titulo}
                        <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                    </h2>
                    {/* <img src={`${ data.img1_url }`} alt={`${data.img1_alt}`} className={styles.imagem}/> */}
                    <ImagemComModal
                    src={`${ data.img1_url }`}
                    alt={data.img1_alt + " image"}
                    classNameImagem={styles.imagem}
                  />
                    {/* <p>
                        Aqui nós temos isso isso isso isso isso fdsfdhsf  fsdfdsfhfhsd fdsfksdghfsdf fsdhfsdg sfsd fsdjk sd fdshf dskjf jkdsfjkfsd
                    </p> */}
                </div>
                <div className={styles.barra}/>
                <div className={styles.direita}>
                    <p>
                        {
                            data.paragrafo
                        }
                
                    </p>
                    {/* <p>
                        O segundo parâmetro indica a condição para que o loop aconteça;
                    </p>
                    <p>
                        O terceiro parâmetro indica o valor que será somado a variável i após cada repetição.
                    </p> */}
                </div>
            </div>

        </div>
     );
}
 
export default Component2;