import styles from '../../styles/ordenacao/Ordenacao.module.css'
import { useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import '../../styles/App.css';
import { Link, useParams } from "react-router-dom";
import Carregamento from "../../components/carregamento/Carregamento";
import IconClose from '../../components/icons/IconClose';
import Linha from '../../components/ordenacao/Linha';
import Acertos from '../../components/acertos/Acertos';

  // interface TypesLinhas{
  //   id: string;
  //   content: string 
  // }

  interface TypeLinhas{
    id: number,
    bloco: string
  }

  interface TypeQuestions{
    pergunta: string;
    assunto: string;
    id: number,
    resposta_ordenada: TypeLinhas[]

  }


const reorder = (list: Array<TypeLinhas> | ArrayLike<TypeLinhas>, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


const Ordenacao = () => {

  const [fase, setFase] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [linhas, setLinhas] = useState<TypeLinhas[]>([])
  const progresso = useRef<HTMLDivElement>(null);
  const [quantidade, setQuantidade] = useState([])
  const [Width, setWidth] = useState(10)
  const [fim, setFim] = useState(false)


  const {id} = useParams()

  const [questoes, setQuestoes] = useState<TypeQuestions[]>([])


  async function fetchQuestions(){

    const api = await fetch(`http://localhost:8000/api/aprender/ordenadas/${id}`)
    const json = await api.json()
    
    setQuestoes(json.data)
  }


  // async function fetchLinhas(){
  //   const apiCodigo = (await fetch(`https://simplifica-desenvolvimento.vercel.app/ordenacao/codigos/${id}.json`)).json()
  //   const teste = await apiCodigo
  //   setQuantidade(teste)
  //   setLinhas(teste[fase])

  //   const apiTitulos = (await fetch(`https://simplifica-desenvolvimento.vercel.app/ordenacao/titulos/${id}.json`)).json()
  //   setTitulos(await apiTitulos)
  // }

  function VerifyEnd(){
    if(questoes.length-1 == fase){
      setFim(true)
    }
  }

  useEffect(() => {

    console.log('acertos')
    console.log(acertos)

  }, [acertos])

  function shuffleArray(array:TypeLinhas[]) {
    const shuffled = array.slice(); // Cria uma cópia do array original
    do {
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troca os elementos
        }
    } while (arraysAreEqual(array, shuffled));
    return shuffled;
}

function arraysAreEqual(arr1:TypeLinhas[], arr2: TypeLinhas[]) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
  
  useEffect(() => {

    fetchQuestions()
    // if(questoes){
    //   VerifyEnd()
    // }

  }, [fase])


  useEffect(() => {
    if(questoes[fase]){
      setLinhas(shuffleArray(questoes[fase].resposta_ordenada))
    }

  }, [questoes])
 

  function progressBar() {
    const porcentagemPorQues = 100 / (quantidade.length);
    setWidth((prev) => prev + porcentagemPorQues);
  }

  useEffect(() => {

      progresso.current!.style.width = `${Width}%`;

  }, [Width])


  useEffect(() => {
    setFim(false)
      if(quantidade.length > 0){
        progressBar()
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function onDragEnd(result: DropResult ) {
    if (!result.destination) {
      return;
    }

    const reorderedItems  = reorder(
      linhas,
      result.source.index,
      result.destination.index
    );
    setLinhas(reorderedItems);
  // eslint-disable-next-line no-extra-semi
  };


  function verificar(){
    // VerifyEnd()
    let res = true
    progressBar()
    
    
    linhas.forEach((item, index)=> {
      
      

          const bloco = questoes[fase].resposta_ordenada[index].bloco
          const posAtual =  item.bloco

          if(bloco !== posAtual){
            res = false
            return
          }
        })

    if(res){
      setAcertos((prev) => prev+1)
    }

    VerifyEnd()
    setFase((prev) => prev+1)


  }

  
  return (
    <div className={styles.ordenacao}>
        <div className={styles.conteudo}>
          <div className={styles.miniHeader}>
            <h2>
              REPETIÇÃO
            </h2>
            <div className={styles.barradeProgresso}>
              <div className={styles.progresso} ref={progresso}></div>
            </div>
            <Link to={"/"}>
              <IconClose width={35} height={35} color="#000000" />
            </Link>
          </div>

          {
          fim ?
          <>
          
            <Acertos
            acertos={acertos}
            quantidadeQuestoes={questoes.length}
            />
            
            <div className={styles.sair}>
              <Link to={'/'}>
              SAIR
              </Link>
            </div>   
          </>
                :
          <DragDropContext onDragEnd={onDragEnd}>
            <section>
            {
            questoes[0] ?
            <h2>{questoes[fase].pergunta}</h2>
            :
            <p>
              Carregando...
            </p>
            }
                        
            <div className={styles.borda}/>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={styles.codigo}>
                  {
                  // linhas ?
                  // linhas.map((item, index) => (
                  //   <>
                  //       <hr />
                  
                  // <Draggable key={item.id} draggableId={item.id} index={index}>
                  //     {(provided) => (
                  
                  //     <code
                  //         className={styles.linha}
                  //         ref={provided.innerRef}
                  //         {...provided.draggableProps}
                  //         {...provided.dragHandleProps}
                  //         key={Number(item.id)}
                  //       >
                  //         <Linha>
                  //           {item.content}
                  //         </Linha>
                  
                  //       </code>
                  
                  //     )}
                  //   </Draggable>
                  //   </>

                  linhas ?
                  linhas.map((item, index) => (
                    <>
                    <hr />

                  <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                      {(provided) => (

                      <code
                          className={styles.linha}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={item.id}
                        >
                          <Linha>
                            {item.bloco}
                          </Linha>

                        </code>

                      )}
                  </Draggable>
                    </>
                  ))
                                :
                    <Carregamento/>}
                  {provided.placeholder}
                    </div>
                  )}
              </Droppable>
      
            <div className={styles.botoes}>
              <button
                // onClick={fetchLinhas}
              >RESET</button>
                {
                  linhas.length-2 == fase ?
                  <button
                    onClick={verificar}
                  >
                    FINALIZAR
                  </button>
                  :
                  <button
                    onClick={verificar}
                  >
                    VERIFICAR
                  </button>
            
                }
            
            </div>
  
            </section>
          </DragDropContext>
            
          }
      </div>
    </div>
  );
};

export default Ordenacao;