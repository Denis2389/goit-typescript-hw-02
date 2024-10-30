import Modal from 'react-modal';
import s from '../ImageModal/ImageModal.module.css';
import { Photo } from '../interfaces'
 
interface ImageModalProps {
  isOpen: boolean;
  image: Photo | null;
  onCloseClick: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onCloseClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseClick}
      overlayClassName={s.backdrop}
    >
      <div className={s.modalContainer}>
        {image && (
          <div className={s.imgContainer}>
            <img src={image.urls.regular} alt={image.description || 'Image'} className={s.image} />
            <h2 className={s.text}>Likes: {image.likes}</h2>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
