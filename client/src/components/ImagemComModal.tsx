import { useState } from "react";
import styles from "../styles/imagemComModal/ImagemComModal.module.css";

interface ImagemComModalProps {
  src: string;
  alt?: string;
  classNameImagem?: string;
}

const ImagemComModal = ({
  src,
  alt = "Imagem com modal",
  classNameImagem,
}: ImagemComModalProps) => {
  //* states
  const [modalAberto, setModalAberto] = useState(false);

  //* render
  return (
    <>
      <img
        onClick={() => {
          setModalAberto(true);
        }}
        className={classNameImagem}
        src={src}
        alt={alt}
      />
      {modalAberto && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <button
              onClick={() => {
                setModalAberto(false);
              }}
              className={styles.closeButton}
            >
              <span>X</span>
            </button>
            <img className={styles.imagemModal} src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagemComModal;