import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from '../../styles/comunidade/FormResposta.module.css'
import ImagemComModal from '../../components/ImagemComModal';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { formatDate, hour } from '../../helpers/formatDate';

type props = {
    state: (x: boolean) => void;
    novaResposta: (x: boolean) => void;
    formRespostas: boolean;
}

const FormResposta = ({state, novaResposta, formRespostas}: props) => {


    const [descricao, setDescricao] = useState('')

    const [url, setUrl] = useState("")
    const input_image = useRef<HTMLInputElement>(null)

    const {id} = useParams()
    const Url = useRef('')

    function anexarImagem(event:ChangeEvent<HTMLInputElement>){

        const [file]= input_image.current!.files  as FileList;

        if(file){
            const url = URL.createObjectURL(file)
            setUrl(url)

        }


        const files = event.target.files![0]

        if (files) {
            const reader = new FileReader();
            reader.onload = () => {

                const urlImg = reader.result;
                Url.current = String(urlImg)
            };
            reader.readAsDataURL(file);
        }

    }
    console.log(url)


    function enviarResposta()   {
        event?.preventDefault()
        const idUser = JSON.parse(localStorage.getItem("simplifica:user")!).id
        axios.post("http://localhost:8000/api/community/comentarios", {
            idUser,
            descricao: descricao,
            url_img: String(Url.current),
            data: String(formatDate(String(new Date()))),
            hora: hour(),
            id_duvida: id,
            titulo: ''
        }). then(() => {
            responder.current!.style.marginLeft = "200vw"
            
            setTimeout(() => {
                state(false)
                novaResposta(true)
            }, 500)
           
          
        }).catch((err:Error) => {
            console.log(err)
        })
    }

 const responder = useRef<HTMLFormElement>(null)

  useEffect(() => {

    if(formRespostas){
        responder.current!.style.opacity = "100%"
  //     responder.current!.style.height = "100%"
    //   responder.current!.style.transform = "translateX(0px)"
    }

  //   else{
  //     responder.current!.style.transition = "all 0.4s "
    //   responder.current!.style.opacity = "0%"
  //     responder.current!.style.height = "0"
  //     responder.current!.style.transform = "translateY(200px)"
      
  //   }


  }, [formRespostas])

    return ( 
        <>

            
                <form method="POST" onSubmit={enviarResposta} className={styles.box_resposta} ref={responder}>
                        <div className={styles.spaceBetween}>
                          <h3 className={styles.title}>
                            Crie sua resposta:
                            </h3>
                          <div className={styles.respostaRightInfo}>
                              <button onClick={() => state(false)}>
                                X
                              </button>
                          </div>
                        </div>
                        <div className={styles.line}></div>
                        <p className={styles.description}>
                            <textarea name="descricao" id=""  required autoFocus placeholder='Digite a descrição aqui...' onChange={(e) => setDescricao(e?.currentTarget.value)}></textarea>
                        </p>
                        {
                            url.length > 0 ?
                            <div className={styles.img_url}>
                            <ImagemComModal
                                src={url}
                                alt={" Imagem da sua resposta"}
                                classNameImagem={styles.image}
                            />
                            </div>
                            :
                            <div className={styles.anexar}>
                    
                            <label htmlFor="img">Arraste ou clique para adicionar a imagem</label>
                            <input  type="file" id='img' name='img'  accept="image/*"  className={styles.inputImg} onChange={anexarImagem} ref={input_image}/>
                            </div>
                        }
                    
                        <button className={styles.button_resposta} type='submit'>
                            Enviar
                        </button>
                </form>
        </>
     );
}
 
export default FormResposta;