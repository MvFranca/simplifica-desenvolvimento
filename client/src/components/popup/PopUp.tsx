import styles from '../../styles/home/PopUp.module.css'
import IconClose from '../icons/IconClose';
import { useContext, useEffect, useRef } from 'react';
import { pointContext } from '../../context/context';

const PopUp = () => {
    
    const {pontos} = useContext(pointContext)
    const parabens = useRef<HTMLDivElement>(null)

    function fechar(){
        parabens.current!.style.bottom = '-11%'
    }

    useEffect(()=> {
        if(pontos != 0){
            aparecer()
        }
        console.log('foi executado: ', pontos)
    }, [pontos])

    function aparecer(){
        parabens.current!.style.bottom = '0'
    }
    
    return ( 
        <div className={styles.popUp} ref={parabens}>
            <IconClose className={styles.icon} width={20} height={20} onClick={fechar}/>
            <p>VOCÊ RECEBEU DIAMANTES, PARABÉNS!</p>
        </div>
     );
}
 
export default PopUp;

