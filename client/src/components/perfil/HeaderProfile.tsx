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

const HeaderProfile = () => {

    const { pontos, fogo,  } = useContext(pointContext);
    const [user, setUser] = useState()
    const [imgUrl, setImgUrl] = useState('./perfil-padrao.png');

    async function userData(){
        const user = await localStorage.getItem("simplifica:user")!;
        const userObject = await JSON.parse(user);
        setUser(userObject)

        axios
            .post(`http://localhost:8000/api/users/img_get?idUser=${userObject.id_usuario}`)
            .then((res) => {
            
            setImgUrl(res.data.data.resposta.url_image);
              console.log(res.data.data.resposta.url_image)
            })
      
            .catch((err) => {
              console.log(err);
            });

    }

    // const resizeImage = (file, maxWidth, maxHeight) => {
    // return new Promise((resolve, reject) => {
    //     resizeFile(file, maxWidth, maxHeight, 'JPEG', 80, 0, (resizedImage) => {
    //       resolve(resizedImage);
    //     }, 'blob');
    //   });
    // };
  
    // Função para converter a imagem redimensionada para uma URL de dados
    // const convertToDataURL = (blob) => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       resolve(reader.result);
    //     };
    //     reader.onerror = reject;
    //     reader.readAsDataURL(blob);
    //   });
    // };

    

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        const user = localStorage.getItem("simplifica:user")!;
        const userObject = JSON.parse(user);
    
        const idUser = Number(userObject.id_usuario);
    

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImgUrl(reader.result);
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
                                <img src={imgUrl} alt="Imagem de Perfil" />
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
                    <FormRedefinir />
                </div>
                
            </div>
            

        </section>
     );
}
 
export default HeaderProfile;