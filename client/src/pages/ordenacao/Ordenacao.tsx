import styles from '../../styles/ordenacao/Ordenacao.module.css'
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../../styles/App.css';
import { Link, useParams } from "react-router-dom";
import Carregamento from "../../components/carregamento/Carregamento";
import IconClose from '../../components/icons/IconClose';
import Linha from '../../components/ordenacao/Linha';


const reorder = (list: Iterable<unknown> | ArrayLike<unknown>, startIndex: number, endIndex: number) => {


  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

 interface TypesLinhas{
    linha: string;
    pos: number 
  }

const Ordenacao = () => {


  const [linhas, setLinhas] = useState([])
  
  const {id} = useParams()
  async function fetchLinhas(){
    const api = (await fetch(`http://localhost:5173/ordenacao/${id}.json`)).json()
    const teste = await api
    setLinhas(teste[0])
  }
  useEffect(() => {
    fetchLinhas()
  }, [])

  console.log(linhas)


  const onDragEnd = (result: { destination: { index: any; }; source: { index: any; }; }) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      linhas,
      result.source.index,
      result.destination.index
    );

    console.log({ reorderedItems });
    setLinhas(reorderedItems);
  };

  return (
    <div className={styles.ordenacao}>
               <div className={styles.miniHeader}>
                <div className={styles.barradeProgresso}>
                  <div className={styles.progresso}></div>
                </div>
                <Link to={"/"}>
                  <IconClose width={35} height={35} color="#000000" />
                </Link>
              </div>
      <DragDropContext onDragEnd={onDragEnd}>
      <section>
            <h2>
                Seu código deve realizar a leitura de um inteiro digitado pelo usuário e, em seguida, calcular e exibir a tabuada de multiplicação até o valor 10.
            </h2>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.codigo}
            >
              {
              linhas ?
              linhas.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (

                   <div
                      className={styles.linha}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                 
                    >
                      <Linha>
                        {item.content}
                      </Linha>
                      
                    </div>

                  
                  )} 
                </Draggable>
               
              ))
             :
                <Carregamento/>}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

          <div className={styles.botoes}>
                <button>RESET</button>

                <button
                  onClick={verificar}
                >VERIFICAR</button>
          </div>

          <div className={styles.opcoes}>
            <p>
              Nota: Coloque o código na ordem correta
            </p>
          </div>
        </section>
      </DragDropContext>
    </div>
  );
};

export default Ordenacao;