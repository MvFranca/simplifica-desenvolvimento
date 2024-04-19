import { useEffect, useState } from "react";
import styles from "../../styles/comunidade/Chat.module.css";
import DuvidaCard from "./duvida";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

interface Duvidas {
  id_duvida: number;
  titulo: string,
  descricao: string,
  url_img: string,
  conteudo: string,
  data: string,
  hora: string,
  idUser: number
}

const Chat = () => {

  const [datas, setDatas] = useState<string[]>([])
  const [duvidas, setDuvidas] = useState<Array<Duvidas>>([])

  useEffect(() => {

    axios.get("http://localhost:8000/api/community/duvidas").then((res) => {

      console.log(res.data.data.resposta)
      setDuvidas(res.data.data.resposta)
    }).catch((err: Error) => {
        console.log(err)
    })

  }, [])

  useEffect(() => {

    if(duvidas.length != 0){
    
      const datasUnicasSet = new Set();


      duvidas.forEach((duvida) => {
        datasUnicasSet.add(duvida.data);
      });


      const datasUnicasArray =  Array.from(datasUnicasSet).map(data => String(data));
      setDatas(datasUnicasArray)
    }

  }, [duvidas])


  return (
    <div className={styles.chat}>

      {
        datas && 
        datas.map((data) => {

        return(
          <section className={styles.infoDuvidas}>
            <div className={styles.infoData}>
              <span className={styles.data}>{data}</span>
              <span className={styles.borda} />
            </div>

            <div className={styles.fullDuvidas}>
              <span className={styles.setaEsquerda}>
                <IoIosArrowForward color="#fff"/>
              </span>
              <div>
                {
                  duvidas.map((duvida) =>{
                    if(duvida.data == data){
                      const descricao = duvida.descricao.slice(0, 30)
                      return (
                        <DuvidaCard
                        duvida={{
                          id: duvida.id_duvida,
                          titulo: duvida.conteudo,
                          descricao: descricao,
                        }}
                      />
                      )
                    }
                   
                  })
                }
              </div>
              <span className={styles.setaDireita}>
                <IoIosArrowForward color="#fff"/>
              </span>
            </div>
          </section>
        )
      })
      }

      {/* <section className={styles.infoDuvidas}>
        <div className={styles.infoData}>
          <span className={styles.data}>18/01</span>
          <span className={styles.borda} />
        </div>

        <div className={styles.fullDuvidas}>
          <span className={styles.setaEsquerda}>
            <IoIosArrowForward color="#fff"/>
          </span>
          <div>
            <DuvidaCard
              duvida={{
                id: 1,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 2,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 3,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
            <DuvidaCard
              duvida={{
                id: 4,
                titulo: "Variáveis",
                descricao: "tive problemas ao definir as variáveis no vscode",
              }}
            />
          </div>
          <span className={styles.setaDireita}>
            <IoIosArrowForward color="#fff"/>
          </span>
        </div>
      </section> */}


    </div>
  );
};

export default Chat;