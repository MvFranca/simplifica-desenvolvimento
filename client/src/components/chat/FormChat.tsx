import { ChangeEvent, useRef, useState } from 'react';
import styles from '../../styles/comunidade/FormChat.module.css';
import IconAddOutline from '../icons/IconAdd';
import IconClose from '../icons/IconClose';
// import { pointContext } from '../../context/context';
// import { Duvidas } from '../../types/IDuvida';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
// import ImagemComModal from '../ImagemComModal';

// import { z } from 'zod';

// const schema = z.object({
//     titulo: z.string().min(5, { message: 'O nome deve ter pelo menos 5 caracteres' }),
//     descricao: z.string().min(5, { message: 'A descricao é obrigatória!' }),
//     conteudo: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
//     urlImagem: z.string().url({ message: 'Digite uma URL válida para a imagem' }),
//   });

const FormChat = () => {
  const [form, setForm] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [conteudo, setConteudo] = useState('Variáveis');
  // const [ url_img, set_url_img ] = useState('')
  const Url = useRef('');

  const navigate = useNavigate()

  const [url, setUrl] = useState('')

  const input_image = useRef<HTMLInputElement>(null)

  const user = localStorage.getItem('simplifica:user')!;
  const userObject = JSON.parse(user);

  // const { duvidas, setDuvidas } = useContext(pointContext);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const [file] = input_image.current!.files as FileList;

    if (file) {
      const url = URL.createObjectURL(file);
      setUrl(url);
    }

    const files = event.target.files![0];

    if (files) {
      const reader = new FileReader();
      reader.onload = () => {
        const urlImg = reader.result;
        Url.current = String(urlImg);
      };
      reader.readAsDataURL(file);
    }
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const idUser = Number(userObject.id);

      const duvida = {
        titulo,
        descricao,
        url_img: String(Url.current),
        conteudo,
        // data: String(formatDate(new Date())),
        // hora: hour(),
        idUser,
      };

      await api.post('/community/duvidas', duvida).then(() => {
        // const duvidasAtt: Duvidas[] = [
        //   ...duvidas,
        //   {
        //     id: duvida.idUser,
        //     titulo: duvida.titulo,
        //     descricao: duvida.descricao,
        //     img_url: duvida.url_img || '',
        //     conteudo: duvida.conteudo,
  
        //     idUser: duvida.idUser,
        //     createdAt: '',
        //     url_img: '',
        //   },
        // ];
        navigate("/comunidade")
        // setDuvidas(duvidasAtt);

      }).catch((Err) => {
        console.log(Err)

      }).finally(() => {
        
        setForm(false);
      })


    }
    // ,
  //   [conteudo, descricao, duvidas, titulo, userObject]
  // );

  return (
    <div className={styles.formChat}>
      {form && (
        <div className={styles.containerForm}>
          <form className={styles.form} onSubmit={submit}>
            <div>
              <label htmlFor="" className={styles.labels}>
                Título:
              </label>
              <input
                type="text"
                placeholder="Qual é a sua dúvida?"
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="" className={styles.labels}>
                Descrição:{' '}
              </label>
              <textarea
                name=""
                onChange={(e) => setDescricao(e.target.value)}
                id=""
                placeholder="Descreva de forma resumida a sua dúvida"
                required

              ></textarea>
            </div>

            <div className={styles.conteudo_e_imagem}>
              <div className={styles.conteudo}>
                <label htmlFor="conteúdo" className={styles.labels}>
                  Conteúdo:
                </label>
                <select
                  className={styles.classSelect}
                  name="conteúdo"
                  id="conteúdo"
                  value={conteudo}
                  onChange={(e) => {
                    setConteudo(e.target.value);
                  }}
                >
                  <option value="Variáveis">Variáveis</option>
                  <option value="Laços de Repetição">Laços de Repetição</option>
                  <option value="Condicionais">Condicionais</option>
                </select>
              </div>


              {
                url.length > 0 ?
                <div className={styles.anexar}>
                  <img src={url} className={styles.imageModal}/>
                </div>
                :
              <div className={styles.anexar}>
                <label htmlFor="img">
                  Arraste ou clique para adicionar a imagem
                </label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                  className={styles.inputImg}
                  ref={input_image}
                />
              </div>

              }
            </div>

            <button>Enviar</button>
          </form>
        </div>
      )}

      <button className={styles.abrir} onClick={() => setForm((prev) => !prev)}>
        {form ? (
          <IconClose color="#fff" width={36} height={36} />
        ) : (
          <IconAddOutline color="#fff" width={36} height={36} />
        )}
      </button>
    </div>
  );
};

export default FormChat;
