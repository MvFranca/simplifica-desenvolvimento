import styles from '../../styles/comunidade/Chat.module.css'
import Duvida from './duvida';

const Chat = () => {
    return ( 
        <div className={styles.chat}>
            <Duvida/>
            <Duvida/>
            <Duvida/>
            <Duvida/>
            <Duvida/>
            <Duvida/>
            <Duvida/>
        </div>
     );
}
 
export default Chat;