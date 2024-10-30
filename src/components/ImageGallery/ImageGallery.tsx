import ImageCard from "../ImageCard/ImageCard";
import s from '../ImageGallery/ImageGallery.module.css';

// Интерфейс для пропсов компонента `ImageGallery`
interface Photo {
  id: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  gallery: Photo[];
  openModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ gallery, openModal }) => {
  return (
    <ul className={s.list}>
      {gallery.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onOpen={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
