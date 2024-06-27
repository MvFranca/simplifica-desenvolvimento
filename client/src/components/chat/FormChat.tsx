import { ChangeEvent, useRef, useState, useContext, useCallback } from 'react';
import styles from '../../styles/comunidade/FormChat.module.css';
import IconAddOutline from '../icons/IconAdd';
import IconClose from '../icons/IconClose';
import { pointContext } from '../../context/context';
import { Duvidas } from '../../types/IDuvida';
import { api } from '../../services/api';

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
  const url = useRef('');

  const user = localStorage.getItem('simplifica:user')!;
  const userObject = JSON.parse(user);

  const { duvidas, setDuvidas } = useContext(pointContext);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const urlImg = reader.result;
        url.current = String(urlImg);
      };
      reader.readAsDataURL(file);
    }
  };

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const idUser = Number(userObject.id);

      const duvida = {
        titulo,
        descricao,
        url_img: String(url.current),
        conteudo,
        // data: String(formatDate(new Date())),
        // hora: hour(),
        idUser,
      };

      await api.post('/community/duvidas', duvida);
      const duvidasAtt: Duvidas[] = [
        ...duvidas,
        {
          id: duvida.idUser,
          titulo: duvida.titulo,
          descricao: duvida.descricao,
          img_url: duvida.url_img || '',
          conteudo: duvida.conteudo,
          // data_duvida: duvida.data,
          // hora_duvida: duvida.hora,
          idUser: duvida.idUser,
          usuario: {
            id: 0,
            username: '',
            email: '',
            senha: '',
            url_image: '',
            fullname: '',
            turma: '',
          },
          createdAt: '',
          url_img: '',
        },
      ];

      setDuvidas(duvidasAtt);
      setForm(false);
    },
    [conteudo, descricao, duvidas, setDuvidas, titulo, userObject]
  );

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
                />
              </div>
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
