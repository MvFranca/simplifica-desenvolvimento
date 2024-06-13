import styles from '../../styles/aprender/Component4.module.css'
import { conteudos } from '../../types/conteudos';

type Props = {
    data: conteudos
}

const Component4 = ({data}:Props) => {
    return ( 

        <div className={styles.component4}>

            <div  className={styles.barra}/>

                <div className={styles.conteudo}> 

                    <h2>
                        {data.subtitulo}
                        <img src="/aprenda/retangulo.png" alt="Retangulo abaixo do título" />
                    </h2>
                    
                    <div className={styles.paragrafos}>
                        <p>
                            {
                                data.paragrafo
                            }
                        </p>
                    </div>
                </div>

            <div  className={styles.barra}/>

        </div>

     );
}
 
export default Component4;