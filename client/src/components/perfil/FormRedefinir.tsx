import { useNavigate } from 'react-router-dom';
import styles from '../../styles/perfil/FormRedefinir.module.css'

interface TypeUser{
    username: string;
    email: string;
    turma: string
    fullname: string
}

type props = {
    user: TypeUser
}

const FormRedefinir = ( {user}: props) => {

      const router = useNavigate();

    function sair() {
        localStorage.removeItem("simplifica:token");
        router("/entrar");
      }

    return ( 
                <form className={styles.form_redefinicao}>
                    {
                        user &&
<div className={styles.conteudo}>
                        <div className={styles.container_form}>
                            <div className={styles.column}>
                                <div className={styles.input}>
                                    <label htmlFor="">Nome Completo</label>
                                    <input type="text" value={user.fullname} />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">E-mail</label>
                                    <input type="text" value={user.email} />
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles.input}>
                                    <label htmlFor="" >Username</label>
                                    <input type="text" value={user.username}/>
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">Turma</label>
                                    <input type="text" value={user.turma}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.botoes}>
                    
                            <button className={styles.sair} onClick={sair}>Sair da conta</button>
                            
                            <button className={styles.redefinir_button}>Redefinir senha</button>
                    
                        </div>

                    </div>
                    }
                </form>
     );
}
 
export default FormRedefinir;