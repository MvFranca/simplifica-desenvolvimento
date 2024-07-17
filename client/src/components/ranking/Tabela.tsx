import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../../styles/ranking/Tabela.module.css';
import IconDiamondd from '../icons/diamante.svg';
import IconFire from '../icons/IconFire';
import { api } from '../../services/api';
import CarregamentoGif from '../carregamentoGif';

export interface pontuacao {
  pontuacao: number;
  fogo: number;
}

interface users {
  username: string;
  turma: number;
  pontuacao: pontuacao;
}

const Tabela = () => {
  const [users, setUsers] = useState<Array<users>>([]);
  const [option, setOption] = useState<'pontuacao' | 'fogo'>('pontuacao');

  const usersTable = useCallback(async () => {
    const { data } = await api.get('/table/tableusers');

    const usuarios: users[] = data.data;

    usuarios.sort(
      (a: { pontuacao: pontuacao }, b: { pontuacao: pontuacao }) =>
        b.pontuacao[option] - a.pontuacao[option]
    );
    setUsers(usuarios);
  }, [option]);

  useEffect(() => {
    usersTable();
  }, [option]);

  const divScore = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divScore.current) {
      const diamanteSpan =
        divScore.current.querySelector<HTMLSpanElement>('[data-diamante]');
      const fogoSpan =
        divScore.current.querySelector<HTMLSpanElement>('[data-fogo]');

      // Define os estilos com base no option usando operador ternário
      diamanteSpan!.style.borderBottom =
        option === 'pontuacao' ? '3px solid #268AFF' : '3px solid transparent';
      fogoSpan!.style.borderBottom =
        option === 'fogo' ? '3px solid #268AFF' : '3px solid transparent';
    }
  }, [option]);

  return (
    <div className={styles.tableRanking}>

      {
        users.length > 0 ?
        <>

          <div className={styles.pointsOptions} ref={divScore}>
            <span onClick={() => setOption('pontuacao')} data-diamante>
              Diamantes
            </span>

            <span onClick={() => setOption('fogo')} data-fogo>
              Fogo
            </span>
          </div>

          <table className={styles.tabela}>
            <thead>
              <tr className={styles.cabecalho}>
                <th
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src="./medalha-generica.png" alt="medalha" />
                  Rank
                </th>
                <th>User</th>
                <th>Turma</th>
                <th className={styles.movimentos}>Movimentos</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => {
                return (
                  <tr key={user.username} className={styles.line}>
                    <td className={styles.posicao}>{index + 1}</td>
                    <td className={styles.username}>{user.username}</td>
                    <td>{user.turma}</td>
                    <td className={styles.movimentos}>-</td>
                    <td className={styles.pontos}>
                      {user.pontuacao[option]}
                      {option == 'pontuacao' ? (
                        <img src={IconDiamondd} alt="Diamante" />
                      ) : (
                        <IconFire
                          width={23}
                          height={23}
                          color="rgb(255, 126, 66)"
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>

        :
        <CarregamentoGif />
      }

      
    </div>
  );
};

export default Tabela;
