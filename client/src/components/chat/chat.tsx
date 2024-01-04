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
                    <Duvida/>
                    <Duvida/>
                    <Duvida/>
                    <Duvida/>
                </div>

            </section>

            <section className={styles.infoDuvidas}>
                
                <div className={styles.infoData}>
                    <span className={styles.data}>
                        04/01
                    </span>
                    <span className={styles.borda}/>
                </div>

                <div className={styles.fullDuvidas}>
                    <Duvida/>
                    <Duvida/>
                    <Duvida/>
                    <Duvida/>
                </div>

            </section>
            <section className={styles.infoDuvidas}>
                
                <div className={styles.infoData}>
                    <span className={styles.data}>
                        04/01
                    </span>
                    <span className={styles.borda}/>
                </div>

                <div className={styles.fullDuvidas}>
                    <Duvida/>
                    <Duvida/>
                    <Duvida/>
                    <Duvida/>
                </div>

            </section>



        </div>
     );
}
 
export default Chat;