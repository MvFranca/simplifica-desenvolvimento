import styles from '../../styles/perfil/FormRedefinir.module.css'

const FormRedefinir = () => {
    return ( 
                <form className={styles.form_redefinicao}>
                    <div className={styles.container_form}>
                        <div className={styles.column}>
                            <div className={styles.input}>
                                <label htmlFor="">Nome Completo:</label>
                                <input type="text" />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="">E-mail:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.input}>
                                <label htmlFor="">Username:</label>
                                <input type="text" />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="">Turma:</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.botoes}>
                    
                        <button className={styles.sair}>Sair da conta</button>
                        
                        <button className={styles.redefinir_button}>Redefinir senha</button>
                    
                    </div>

                </form>
     );
}
 
export default FormRedefinir;