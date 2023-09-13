import styles from '../../styles/home/opcoesPergunta.module.css'
import { Link } from 'react-router-dom';
import { dados } from '../../types/dados';

type props = {
    confirmar: () => void;
    perguntaAtual: number;
    assunto: Array<dados>;
    finalizar: () => void;
    setPerguntaAtual: (num: number) => void;
    fim: boolean
    limpar: () => void;
}

const OpcoesPergunta = ({confirmar, perguntaAtual, setPerguntaAtual, assunto, finalizar, fim, limpar}: props) => {


    function pular(perguntaAtual: number){
        setPerguntaAtual(perguntaAtual + 1)
        assunto.push(assunto[perguntaAtual])
        limpar()
    }

    console.log(assunto[7])
    
    return ( 
        <div className={styles.container}>
            <div className={styles.conteudo}>
                {!fim ? 
                <>
                    <div>
                        <a onClick={ () => {
                        pular(perguntaAtual)
                        }
                            }>PULAR</a>
                    </div>
                    <div>
                        {
                            perguntaAtual <  assunto.length-1 ? <a onClick={confirmar}>CONFIRMAR</a> :  <a onClick={finalizar}>FINALIZAR</a>
                        }
                    
                    </div>
                </>
            :
            <div className={styles.sair}>
                <Link to={'/'}>
                SAIR
                </Link>
            </div>   
            }
                
            </div>
        </div>
     );
}
 
export default OpcoesPergunta;