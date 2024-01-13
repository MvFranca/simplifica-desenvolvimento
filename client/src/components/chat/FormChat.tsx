import { useState } from 'react';
import styles from '../../styles/comunidade/FormChat.module.css'
import IconAddOutline from '../icons/IconAdd';
import IconClose from '../icons/IconClose';


const FormChat = () => {

    const [form, setForm] = useState(false)

    return ( 
        <div className={styles.formChat}>
            
            {
                form  &&
                <div className={styles.containerForm}>     
                            
                    <form className={styles.form}>
                        
                        <div>
                            <label htmlFor="" className={styles.labels}>Título:</label>
                            <input type="text" placeholder='Qual é a sua dúvida?'/>
                        </div>

                        <div>
                            <label htmlFor="" className={styles.labels}>Descrição: </label>
                            <textarea name="" id="" placeholder='Descreva de forma resumida a sua dúvida'></textarea>
                        </div>

                        <div className={styles.anexar}>
                            <label htmlFor="img">Arraste ou clique para adicionar a imagem</label>
                            <input type="file" name="img" id="img" placeholder='teste' className={styles.inputImg}/>
                        </div>
                        
                        <button>
                            Enviar
                        </button>
                        
                    </form>
                </div>
            }


            <button className={styles.abrir}
                onClick={() => setForm(prev => !prev)}
            >   
                {
                    form ? <IconClose  color='#fff' width={36} height={36}/>
                    :
                    <IconAddOutline color='#fff' width={36} height={36}/>
                }

            </button>
            
        </div>
     );
}
 
export default FormChat;