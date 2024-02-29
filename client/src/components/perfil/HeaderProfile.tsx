import styles from '../../styles/perfil/HeaderProfile.module.css'
import { pointContext } from "../../context/context";
import { useContext } from 'react';
import IconFire from '../icons/IconFire';
import IconDiamond from '../icons/IconDiamond';
import FormRedefinir from './FormRedefinir';

const HeaderProfile = () => {

  const { pontos, fogo } = useContext(pointContext);

    return ( 
        <section className={styles.header_profile}>
            <div className={styles.container}>
                <div className={styles.imagem_fundo}>
                    <img src="./fundo-perfil.svg" alt="Foto de fundo do usuário" />
                </div>
                <div className={styles.user_data}>
                    <div className={styles.user}>
                        <div>
                            <img src="./user-img.svg" alt="Imagem de Perfil" />
                        </div>
                        <div className={styles.data}>
                            <h2>
                            @zeze_dicamargo
                            </h2>
                            <span>
                            zeze09@hotmail.com
                            </span>
                            <span className={styles.turma}>
                                911
                            </span>
                        </div>
                    </div>
                    <div className={styles.desempenho}>
                        <h2>
                            Desempenho:
                        </h2>
                        <div className={styles.pontos}>
                            <span>
                                {pontos}
                                <IconDiamond width={23} height={23} color="rgb(255, 0, 0)" />
                            </span>
                
                            <span>
                                {fogo}
                                <IconFire width={23} height={23} color="rgb(255, 126, 66)" />
                            </span>
                        </div>
                    </div>

                </div>
                    <hr style={{width: "90%"}}/>


                <div className={styles.redefinicao}>
                    <h1>
                        Redefinir Dados
                    </h1>
                    <FormRedefinir />
                </div>
            </div>
            

        </section>
     );
}
 
export default HeaderProfile;