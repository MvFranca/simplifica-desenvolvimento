import { useEffect, useState } from 'react';
import styles from '../../styles/ranking/Tabela.module.css'
import IconDiamondd from '../icons/diamante.svg';
import Lupa from '../icons/lupa.svg'
import axios from 'axios';

interface users {
    username: string,
    turma: number,
    pontuacao:string
}

const Tabela = () => {

    const [users, setUsers] = useState<Array<users>>([])

    async function usersTable(){
        
    axios
      .get("http://localhost:8000/api/table/tableusers")
      .then((res) => {
        console.log(res)
        const usuarios = res.data.data.data.rows

        usuarios.sort((a: { pontuacao: number; }, b: { pontuacao: number; }) => b.pontuacao - a.pontuacao);

        console.log(usuarios)

        setUsers(usuarios);
      })
      .catch((err) => {
        console.log("to aqui")
        console.log(err);
      });
    }

    useEffect(() => {
        usersTable()
    }, [])


    useEffect(() => {
          
    }, [users])

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
                {
                    users &&
                    users.map((user, index) => {
                        return(
                            <tr className={styles.line}>
                            <td className={styles.posicao}>{index + 1}</td>
                            <td className={styles.username}>{ user.username }</td>
                            <td>{user.turma}</td>
                            <td className={styles.movimentos}>-</td>
                            <td className={styles.pontos}>
                                {user.pontuacao}
                                <img src={IconDiamondd} alt="Diamante" />
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