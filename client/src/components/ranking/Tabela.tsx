import styles from '../../styles/ranking/Tabela.module.css'
import IconDiamondd from '../icons/diamante.svg';
import Lupa from '../icons/lupa.svg'

const Tabela = () => {
    return ( 
        <div  className={styles.tableRanking}>
            <div className={styles.cabecalho}>
                <h1>
                    Ranking


                    <span />
                </h1>


                <div className={styles.searchInput}>

                    <input type="text" placeholder='Pesquisar por alguém...'/>
                    <button>
                        <img src={Lupa} alt="Lupa" />
                    </button>

                </div>
            </div>

            <div className={styles.pointsOptions}>

                    <span className={styles.diamantes}>
                        Diamantes
                    </span>

                    <span>
                        Foguinho
                    </span>
                
            </div>
            
            <table className={styles.tabela}>
                <tr className={styles.cabecalho}>
                    <th style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src="./medalha-generica.png" alt="medalha" />
                        Rank
                    </th>
                    <th>User</th>
                    <th>Turma</th>
                    <th className={styles.movimentos}>Movimentos</th>
                    <th>Pontuação</th>
                    
                </tr>

                <tr className={styles.line}>
                    <td className={styles.posicao}>1</td>
                    <td className={styles.username}>francisco_lindo</td>
                    <td>911</td>
                    <td className={styles.movimentos}>-</td>
                    <td className={styles.pontos}>
                        43
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>

                <tr className={styles.line}>
                    <td className={styles.posicao}>2</td>
                    <td className={styles.username}>ruan_ranison</td>
                    <td>921</td>
                    <td className={styles.movimentos}>+1</td>
                    <td className={styles.pontos}>
                        38
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>

                <tr className={styles.line}>
                    <td className={styles.posicao}>3</td>
                    <td className={styles.username}>guilherme</td>
                    <td>921</td>
                    <td className={styles.movimentos}>-1</td>
                    <td className={styles.pontos}>
                        31
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>
                <tr className={styles.line}>
                    <td className={styles.posicao}>3</td>
                    <td className={styles.username}>guilherme</td>
                    <td>921</td>
                    <td className={styles.movimentos}>-1</td>
                    <td className={styles.pontos}>
                        31
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>
                <tr className={styles.line}>
                    <td className={styles.posicao}>3</td>
                    <td className={styles.username}>guilherme</td>
                    <td>921</td>
                    <td className={styles.movimentos}>-1</td>
                    <td className={styles.pontos}>
                        31
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>
                <tr className={styles.line}>
                    <td className={styles.posicao}>3</td>
                    <td className={styles.username}>guilherme</td>
                    <td>921</td>
                    <td className={styles.movimentos}>-1</td>
                    <td className={styles.pontos}>
                        31
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>
                <tr className={styles.line}>
                    <td className={styles.posicao}>3</td>
                    <td className={styles.username}>guilherme</td>
                    <td>921</td>
                    <td className={styles.movimentos}>-1</td>
                    <td className={styles.pontos}>
                        31
                        <img src={IconDiamondd} alt="Diamante" />
                    </td>
                </tr>

            </table>

        </div>
     );
}
 
export default Tabela;