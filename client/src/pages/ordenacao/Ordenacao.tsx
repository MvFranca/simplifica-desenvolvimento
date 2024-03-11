import styles from '../../styles/ordenacao/Ordenacao.module.css'
import { useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import '../../styles/App.css';
import { Link, useParams } from "react-router-dom";
import Carregamento from "../../components/carregamento/Carregamento";
import IconClose from '../../components/icons/IconClose';
import Linha from '../../components/ordenacao/Linha';
import Acertos from '../../components/acertos/Acertos';

interface TypesLinhas{
    id: string;
    content: string 
  }

const reorder = (list: Array<TypesLinhas> | ArrayLike<TypesLinhas>, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

  interface TypesTitulos{
    titulo: string;
    assunto: string;
    id: string 
  }

const Ordenacao = () => {

  const [fase, setFase] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [linhas, setLinhas] = useState<TypesLinhas[]>([])
  const progresso = useRef<HTMLDivElement>(null);
  const [quantidade, setQuantidade] = useState([])
  const [Width, setWidth] = useState(10)
  const [fim, setFim] = useState(false)
  const [titulos, setTitulos] = useState<Array<TypesTitulos>>([])

  const {id} = useParams()
  async function fetchLinhas(){
    const apiCodigo = (await fetch(`https://simplifica-desenvolvimento.vercel.app/ordenacao/codigos/${id}.json`)).json()
    const teste = await apiCodigo
    setQuantidade(teste)
    setLinhas(teste[fase])
    const apiTitulos = (await fetch(`https://simplifica-desenvolvimento.vercel.app/ordenacao/titulos/${id}.json`)).json()
    setTitulos(await apiTitulos)
  }

  useEffect(() => {
    fetchLinhas()

        
    if(linhas.length-1 == fase){
      setFim(true)
    }

  }, [fase])

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
    
    let res = true
    progressBar()
    linhas.forEach((item, index)=> {
          const id = Number(item.id)
          const posAtual =  Number(index) + 1

          if(id !== posAtual){
            res = false
            return
          }
        })

    if(res){
      setFase((prev) => prev+1)
      setAcertos((prev) => prev+1)
      return 
    }
    
    setFase((prev) => prev+1)

  }

  
  return (
    <div className={styles.ordenacao}>
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
        quantidadeQuestoes={3}
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
                titulos[0] ?
                <h2>
                 {titulos[fase].titulo}
              </h2>
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
                className={styles.codigo}
              >
                {
                linhas ?
                linhas.map((item, index) => (
                  <>
                      <hr />
                  
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      
                    <code
                        className={styles.linha}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={Number(item.id)}
                      >

                        <Linha>
                          {item.content}
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
                    onClick={fetchLinhas}
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
  );
};

export default Ordenacao;