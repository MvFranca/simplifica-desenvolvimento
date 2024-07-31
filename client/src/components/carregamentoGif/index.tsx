import styles from "../../styles/carregamentoGif/carregamentoGif.module.css"

const CarregamentoGif = () => {
    return(
        <div className={styles.carregamento}>
            <img src={'./carregamento.gif'} alt="" />
        </div>
    )
}

export default CarregamentoGif