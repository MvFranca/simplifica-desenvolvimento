import { PropsWithChildren} from 'react'
import styles from '../../styles//ordenacao/Linha.module.css'


function Linha({children}: PropsWithChildren ){



    return(
        <div className={styles.linha}
        >
            <img src="/movimentacao.png" alt="icone de movimentacao" />
            <p>{children}</p>
        </div>
    )
}

export default Linha