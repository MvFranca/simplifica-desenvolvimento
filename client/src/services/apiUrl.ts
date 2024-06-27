import { api } from './api';

export async function GetImgUser() {
  const user = localStorage.getItem('simplifica:user')!;
  const userObject = await JSON.parse(user);

  const { data } = await api.get(`/users/user/${userObject.id}/image`);

  return data.data.resposta.url_image;
}
