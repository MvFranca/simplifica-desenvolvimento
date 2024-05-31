import { useEffect, useContext, useRef} from "react";
import styles from "../../styles/comunidade/Chat.module.css";
import DuvidaCard from "./duvida";
// import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { pointContext } from "../../context/context";

// import { obterDiaDaSemana, obterDiaDeHoje } from "../../helpers/formatDate";

const Chat = () => {

  // const [datas, setDatas] = useState<string[]>([])

  const duvidasScroll = useRef<HTMLDivElement>(null)

  const { setDuvidas, duvidas  } = useContext(pointContext)
  
  useEffect(() => {


    axios.get("http://localhost:8000/api/community/duvidas").then((res) => {

      const {data} = res.data
      console.log('duvidas:')
      console.log(data)
      setDuvidas(data)
    }).catch((err: Error) => {
        console.log(err)
    })

  }, [])

  useEffect(() => {

    if(duvidas.length != 0){
    
      // const datasUnicasSet = new Set();


      // duvidas.forEach((duvida) => {
      //   datasUnicasSet.add(duvida.data_duvida);
      // });

      // const datasUnicasArray =  Array.from(datasUnicasSet).map(data => String(data)).reverse()


      // setDatas(datasUnicasArray)
    }

  }, [duvidas])

  return (
    <div className={styles.chat}>

      {/* {
        datas && 
        datas.map((data) => {

        return( */}
          <section className={styles.infoDuvidas}>
            <div className={styles.infoData}>

              

              <span className={styles.data}>
                {/* {

                  data == obterDiaDeHoje() ? "Hoje" 
                  : obterDiaDaSemana(data)
                } */}
              </span>
              <span className={styles.borda} />
            </div>

            <div className={styles.fullDuvidas}>
              {/* <span className={styles.setaEsquerda}>
                <IoIosArrowForward color="#fff"/>
              </span> */}
              <div className={styles.scroll} ref={duvidasScroll} id="teste">
                {
                  duvidas?.slice().reverse().map((duvida) =>{


                    // if(duvida.data_duvida == data){
                      return (
                        <DuvidaCard
                        duvida={{
                          id: duvida.id,
                          titulo: duvida.conteudo,
                          descricao: duvida.descricao,

                        }}
                      />
                      )
                    // }
                   
                  })
                }
              </div>
              {/* <span className={styles.setaDireita} >
                <IoIosArrowForward color="#fff"/>
              </span> */}
            </div>
          </section>
        {/* )
      })
      } */}

    </div>
  );
};

export default Chat;