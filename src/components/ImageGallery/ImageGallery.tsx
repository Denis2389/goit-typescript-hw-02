import ImageCard from "../ImageCard/ImageCard";
import s from '../ImageGallery/ImageGallery.module.css';
import { Photo } from '../interfaces';


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
