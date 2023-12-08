import styles from '../../styles/comunidade/Criacao.module.css'

const Criacao = () => {
    return ( 
        <div className={styles.criacao}>
            <h2>ENVIAR DÚVIDA</h2>
            <form>
            <textarea name="mensagem" id="mensagem" placeholder='Digite sua dúvida aqui'></textarea>
            <input type="text" placeholder='Digite o nome do conteúdo'/>
            <button>ENVIAR</button>   
            </form>
        </div>
     );
}
 
export default Criacao;