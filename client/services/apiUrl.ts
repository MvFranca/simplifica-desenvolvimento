import axios from 'axios';

export const token = '85248b8ad39fc2b62cf6b7f5fcb3347adae64ef3';

const ApiUrl = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${token}`,
    },
});


export async function GetImgUser(){
    const user = localStorage.getItem("simplifica:user")!;
    const userObject = await JSON.parse(user);

    return await axios
        .get(`http://localhost:8000/api/users/img_get?idUser=${userObject.id_usuario}`)
        .then((res) => {
        
        return res.data.data.resposta.url_image
        })
  
        .catch((err) => {
          console.log(err);
        });

}


export async function updateProgress ( myProgress:number, idUser:number, progressoBotoes:number){

    
        axios.put(`http://localhost:8000/api/content/user/${idUser}/progresso`, { myProgress, progressoBotoes }).then((res) =>{
    
          console.log(res)
        }).catch((error) => {
          console.log('error:')
          console.log(error)
        })
}



export default ApiUrl;