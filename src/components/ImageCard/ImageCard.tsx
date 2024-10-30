import s from '../ImageCard/ImageCard.module.css';

interface Photo {
  id: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageCardProps {
  photo: Photo;
  onOpen: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, onOpen }) => {
  return (
    <div>
      <img
        className={s.img}
        src={photo.urls.small}
        alt={photo.description || 'Image'}
        onClick={() => onOpen(photo)}
      />
    </div>
  );
};

export default ImageCard;
