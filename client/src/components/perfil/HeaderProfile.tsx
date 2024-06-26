import styles from '../../styles/perfil/HeaderProfile.module.css';
import { pointContext } from '../../context/context';
import { useContext, useEffect, useState } from 'react';
import IconFire from '../icons/IconFire';
import IconDiamond from '../icons/IconDiamond';
import FormRedefinir from './FormRedefinir';
import IconEdit2 from '../icons/IconEdit';
import { ChangeEvent } from 'react';
import { api } from '../../services/api';

interface TypesUser {
  username: string;
  email: string;
  turma: string;
  fullname: string;
}

const HeaderProfile = () => {
  const { pontos, fogo, img, setImg } = useContext(pointContext);
  const [user, setUser] = useState<TypesUser>({
    username: '',
    email: '',
    turma: '',
    fullname: '',
  });

  async function userData() {
    const user = await localStorage.getItem('simplifica:user')!;
    const userObject = await JSON.parse(user);
    setUser(userObject);
  }

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    const user = localStorage.getItem('simplifica:user')!;
    const userObject = JSON.parse(user);

    const idUser = Number(userObject.id);

    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const urlImg = reader.result;

        await api.put(`/users/user/${idUser}/image`, {
          urlImg,
        });

        const userDataJSON = localStorage.getItem('simplifica:user');
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          userData.url_image = urlImg;
          localStorage.setItem('simplifica:user', JSON.stringify(userData));
          setImg(String(urlImg));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <section className={styles.header_profile}>
      <div className={styles.container}>
        <div className={styles.imagem_fundo}>
          <img src="./fundo-perfil.svg" alt="Foto de fundo do usuário" />
        </div>
        <div className={styles.user_data}>
          <div className={styles.user}>
            <label htmlFor="img" className={styles.container_img}>
              <img src={img} alt="Imagem de Perfil" />
              <input
                type="file"
                id="img"
                name="img"
                onChange={handleImageChange}
                accept="image/*"
              />
              <div className={styles.edit_img}>
                <IconEdit2 width={18} color="#fff" height={18} />
              </div>
            </label>
            <div className={styles.data}>
              <h2>@{user && user.username}</h2>
              <span>{user && user.email}</span>
              <span className={styles.turma}>{user && user.turma}</span>
            </div>
          </div>
          <div className={styles.desempenho}>
            <h2>Desempenho:</h2>
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

        <hr style={{ width: '90%', margin: 'auto' }} />

        <div className={styles.redefinicao}>
          <h1>Redefinir Dados</h1>
          <FormRedefinir user={user} />
        </div>
      </div>
    </section>
  );
};

export default HeaderProfile;
