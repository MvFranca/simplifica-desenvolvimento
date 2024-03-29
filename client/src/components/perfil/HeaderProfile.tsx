import styles from '../../styles/perfil/HeaderProfile.module.css'
import { pointContext } from "../../context/context";
import { useContext, useEffect, useState } from 'react';
import IconFire from '../icons/IconFire';
import IconDiamond from '../icons/IconDiamond';
import FormRedefinir from './FormRedefinir';
// import { resizeFile } from 'react-image-file-resizer'; 
// import IconCamera from '../icons/IconEdit';
import IconEdit2 from '../icons/IconEdit';
import axios from 'axios';
import { ChangeEvent } from 'react';


interface TypesUser {
    username: string;
    email: string;
    turma: string;
    fullname: string;
}

const HeaderProfile = () => {
    console.log("oi")
    const { pontos, fogo, img, setImg } = useContext(pointContext);
    const [user, setUser] = useState<TypesUser>({
        username: "",
        email: "",
        turma: "",
        fullname: ""
    })
    

    async function userData(){
        const user = await localStorage.getItem("simplifica:user")!;
        const userObject = await JSON.parse(user);
        setUser(userObject)

    }

    const handleImageChange = (event:ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files![0]

        const user = localStorage.getItem("simplifica:user")!;
        const userObject = JSON.parse(user);
    
        const idUser = Number(userObject.id_usuario);
    

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg(String(reader.result));
                console.log(reader.result)
                const urlImg = reader.result;
                axios
                .post("http://localhost:8000/api/users/img_att", { urlImg, idUser })
                .then((res) => {
                    console.log(res)
                })

                .catch((err) => {
                    console.log(err);
                });
            };
            reader.readAsDataURL(file);
        }
      };

    


    useEffect(() => {
        userData()
    }, [])

    return ( 
        <section className={styles.header_profile}>
            <div className={styles.container}>
                <div className={styles.imagem_fundo}>
                    <img src="./fundo-perfil.svg" alt="Foto de fundo do usuário" />
                </div>
                <div className={styles.user_data}>
                    <div className={styles.user}>
                        <label htmlFor='img' className={styles.container_img}>
                            {/* <button> */}
                                <img src={img} alt="Imagem de Perfil" />
                                <input type="file" id='img' name='img' onChange={handleImageChange} accept="image/*" />
                                <div className={styles.edit_img}>
                                    <IconEdit2 width={18} color='#fff' height={18}/>
                                </div>
                            {/* </button> */}
                        </label>
                        <div className={styles.data}>
                            <h2>
                            {/* @zeze_dicamargo */}
                            @
                            {
                                    user &&
                                    user.username
                                }
                            </h2>
                            <span>
                                {
                                    user &&
                                    user.email
                                }
                            {/* zeze09@hotmail.com */}
                            </span>
                            <span className={styles.turma}>
                                {
                                    user &&
                                    user.turma
                                }
                            </span>
                        </div>
                    </div>
                    <div className={styles.desempenho}>
                        <h2>
                            Desempenho:
                        </h2>
                        <div className={styles.pontos}>
                            <span>
                                <IconDiamond width={23} height={23} color="rgb(255, 0, 0)" />
                                {pontos}
                            </span>
                
                            <span>
                                <IconFire width={23} height={23} color="rgb(255, 126, 66)" />
                                {fogo}
                            </span>
                        </div>
                    </div>

                </div>

                <hr style={{width: "90%", margin: "auto"}}/>


                <div className={styles.redefinicao}>
                    <h1>
                        Redefinir Dados
                    </h1>
                    <FormRedefinir 
                        user={user}
                    />
                </div>
                
            </div>
            

        </section>
     );
}
 
export default HeaderProfile;