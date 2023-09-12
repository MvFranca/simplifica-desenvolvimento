import { useContext, useEffect, useState } from 'react';
import styles from '../../styles/home/Acertos.module.css'

type props = {
    acertos: number;
    quantidadeQuestoes: number
}

import { pointContext } from '../../context/context';


const Acertos = ({acertos, quantidadeQuestoes}: props) => {
    const [porcentagem, setPorcentagem] = useState(0)
    const {pontos, setPontos} = useContext(pointContext)

    useEffect(() => {
        setPorcentagem(acertos * 100/ quantidadeQuestoes)
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        
        if(porcentagem == 100){
            setPontos(pontos + 4)
        }
        else if(porcentagem >= 50 && porcentagem < 100){
            setPontos(pontos + 2)
        } else if(porcentagem < 50 && porcentagem > 0){
            setPontos(pontos + 1)
        } else if(porcentagem == 0) return
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [porcentagem])

  

    return ( 
        <div className={styles.container}>
            <h1>QUIZ FINALIZADO</h1>
          
            <div className={styles.dados}>
                <div className={styles.aproveitamento}>
                    <p>
                    Seu aproveitamento foi de: <strong>{porcentagem}%</strong>
                    </p>
                </div>
                
                <div className={styles.numeros}>
                    <p className={styles.acertos}>
                        <strong> {acertos}</strong>
                    </p>
                    <div>
                        <p>
                            <span>ACERTOS DE </span><br />
                            <span><strong>{quantidadeQuestoes}</strong> POSSÍVEIS</span>
                        </p>
                    </div>
                </div>
            </div>
          
        </div>
     );
}
 
export default Acertos;