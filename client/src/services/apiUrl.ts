import { api } from './api';

export async function GetImgUser() {
  const user = localStorage.getItem('simplifica:user')!;
  const userObject = await JSON.parse(user);

  const { data } = await api.get(`/users/user/${userObject.id}/image`);

  return data.data.resposta.url_image;
}

export async function updateProgress(
  myProgress: number,
  idUser: number,
  progressoBotoes: number
) {
  api
    .put(`/content/user/${idUser}/progresso`, {
      myProgress,
      progressoBotoes,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log('error:');
      console.log(error);
    });
}
