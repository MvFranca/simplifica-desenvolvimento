import styles from '../../styles/perfil/FormRedefinir.module.css'

const FormRedefinir = () => {
    return ( 
            <form className={styles.form_redefinicao}>
                <div>
                    <div>
                        <label htmlFor="">Nome Completo</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Turma</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
     );
}
 
export default FormRedefinir;