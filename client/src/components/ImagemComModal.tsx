import { useRef, useState } from 'react';
import styles from '../styles/ImagemComModal/ImagemComModal.module.css';
import 'react-medium-image-zoom/dist/styles.css';
interface ImagemComModalProps {
  src: string;
  alt?: string;
  classNameImagem?: string;
}

const ImagemComModal = ({
  src,
  alt = 'Imagem com modal',
}: // classNameImagem,
ImagemComModalProps) => {
  //* states
  const [modalAberto, setModalAberto] = useState(false);

  const [zoomed, setZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleZoomClick = (event: MouseEvent) => {
    const { clientX, clientY } = event; // Coordenadas do clique na janela
    const target = event.target as HTMLElement;
    const { left, top, width, height } = target.getBoundingClientRect(); // Posição e dimensões da imagem

    // Calcular a posição relativa do clique dentro da imagem
    const clickX = clientX - left;
    const clickY = clientY - top;

    // Calcular o deslocamento necessário para centralizar a área clicada após o zoom
    const offsetX = (clickX / width) * 100;
    const offsetY = (clickY / height) * 100;

    setZoomed(!zoomed);
    setZoomPosition({ x: offsetX, y: offsetY });
  };

  const handleDragStart = (event: DragEvent) => {
    if (zoomed) {
      setDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });
    }
  };

  const handleDragMove = (event: DragEvent) => {
    if (dragging && zoomed) {
      const { clientX, clientY } = event;
      const offsetX = (clientX - dragStart.x) / 2; // Ajuste a sensibilidade de arrasto conforme necessário
      const offsetY = (clientY - dragStart.y) / 2; // Ajuste a sensibilidade de arrasto conforme necessário
      setZoomPosition((prevPosition) => ({
        x: prevPosition.x + offsetX,
        y: prevPosition.y + offsetY,
      }));
      setDragStart({ x: clientX, y: clientY });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const zoomStyle = {
    transform: zoomed
      ? `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`
      : 'scale(1)',
    transition: 'transform 0.3s ease',
    cursor: zoomed ? 'grab' : 'auto', // Altera o cursor durante o arrasto
  };

  //* render
  return (
    <>
      <div className={styles.imagemResposta}>
        {/* <Zoom
        > */}
        <img
          onClick={() => {
            setModalAberto(true);
          }}
          src={src}
          alt={alt}
        />

        {/* </Zoom> */}
      </div>

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

            <img
              style={zoomStyle}
              src={src}
              alt={alt}
              onClick={() => handleZoomClick}
              className="zoomable"
              onMouseDown={() => handleDragStart}
              onMouseMove={() => handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              ref={imageRef}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagemComModal;
