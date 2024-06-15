import { useEffect, useState } from 'react';
import styles from '../../styles/ranking/Tabela.module.css'
import IconDiamondd from '../icons/diamante.svg';
// import Lupa from '../icons/lupa.svg'
import axios from 'axios';
import IconFire from '../icons/IconFire';

export interface pontuacao {
    pontuacao: number,
    fogo: number
}

interface users {
    username: string,
    turma: number,
    pontuacao: pontuacao
}

const Tabela = () => {

    const [users, setUsers] = useState<Array<users>>([])
    const [option, setOption] = useState< "pontuacao" | "fogo" >("pontuacao")


    function ordenacao(arr: users[]){
        arr.sort((a: { pontuacao: pontuacao; }, b: { pontuacao: pontuacao; }) => b.pontuacao[option] - a.pontuacao[option]);
    }

    async function usersTable(){
        
    axios
      .get("http://localhost:8000/api/table/tableusers")
      .then((res) => {

        const usuarios: users[] = res.data.data
        ordenacao(usuarios)
        setUsers(usuarios);

      })
      .catch((err) => {
        console.log(err);
      });
    }

    useEffect(() => {
        usersTable()
    }, [option])




    return ( 
        <div  className={styles.tableRanking}>
            {/* <div className={styles.cabecalho}>
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
            </div> */}

            <div className={styles.pointsOptions}>

                    <span className={styles[option]}
                        onClick={() => setOption("pontuacao")}
                    >
                        Diamantes
                    </span>

                    <span
                        className={styles[option]}
                        onClick={() => setOption("fogo")}
                    >
                        Fogo
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
                {
                    users?.map((user, index) => {
                        return(
                            <tr className={styles.line}>
                            <td className={styles.posicao}>
                                {index + 1}
                            </td>
                            <td className={styles.username}>
                                { user.username }
                            </td>
                            <td>
                                {user.turma}
                            </td>
                            <td className={styles.movimentos}>
                                -
                            </td>
                            <td className={styles.pontos}>
                                {user.pontuacao[option]}
                                {
                                 option == "pontuacao"  ? <img src={IconDiamondd} alt="Diamante" /> : <IconFire width={23} height={23} color="rgb(255, 126, 66)" />
                                }
                            </td>
                        </tr>
                        )
                    })
                }


              
            </table>

        </div>
     );
}
 
export default Tabela;