import styles from '../../styles/home/OpcoesAprender.module.css'
import { conteudos } from '../../types/conteudos';

type props = {
    avancar: () => void;
    voltar: () => void;
    assuntoAtual: number;
    conteudo: Array<conteudos>;
    finalizar: () => void;
}

const OpcoesAprender = ({avancar, voltar, finalizar, assuntoAtual, conteudo}: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
          <>
            <div>
              <a onClick={voltar}>
                Voltar
              </a>
            </div>
            <div>
        
              {
              assuntoAtual+1 !== conteudo.length ?
              <a onClick={avancar}>
                  Avançar
              </a>
              :
              <a onClick={finalizar}>
              Finalizar
              </a>
              }
             
            
            </div>
          </>
      
      </div>
    </div>
  );
};

export default OpcoesAprender;
