import styles from '../../styles/comunidade/Chat.module.css'
import Duvida from './duvida';

const Chat = () => {
    return ( 
        <div className={styles.chat}>

            <section className={styles.infoDuvidas}>
                
                <div className={styles.infoData}>
                    <span className={styles.data}>
                        18/01
                    </span>
                    <span className={styles.borda}/>
                </div>

                <div className={styles.fullDuvidas}>
                    <span className={styles.setaEsquerda}>
                        <img src="icon-arrow.png" alt="seta" />
                    </span>
                    <div>
                        <Duvida/>
                        <Duvida/>
                        <Duvida/>
                        <Duvida/>
                    </div>
                    <span className={styles.setaDireita}>
                        <img src="icon-arrow.png" alt="seta"/>
                    </span>
                </div>
                
            </section>

            
            <section className={styles.infoDuvidas}>
                
                <div className={styles.infoData}>
                    <span className={styles.data}>
                        13/01
                    </span>
                    <span className={styles.borda}/>
                </div>

                <div className={styles.fullDuvidas}>
                    <span className={styles.setaEsquerda}>
                        <img src="icon-arrow.png" alt="seta" />
                    </span>
                    <div>
                        <Duvida/>
                        <Duvida/>
                        <Duvida/>
                        <Duvida/>
                    </div>
                    <span className={styles.setaDireita}>
                        <img src="icon-arrow.png" alt="seta"/>
                    </span>
                </div>
                
            </section>
         
            <section className={styles.infoDuvidas}>
                
                <div className={styles.infoData}>
                    <span className={styles.data}>
                        07/01
                    </span>
                    <span className={styles.borda}/>
                </div>

                <div className={styles.fullDuvidas}>
                    <span className={styles.setaEsquerda}>
                        <img src="icon-arrow.png" alt="seta" />
                    </span>
                    <div>
                        <Duvida/>
                        <Duvida/>
                        <Duvida/>
                        <Duvida/>
                    </div>
                    <span className={styles.setaDireita}>
                        <img src="icon-arrow.png" alt="seta"/>
                    </span>
                </div>
                
            </section>


            

        </div>
     );
}
 
export default Chat;