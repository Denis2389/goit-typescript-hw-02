import './App.css';
import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchGallery } from '../gallery-api';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage, { tryAgain } from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import Modal from 'react-modal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { Photo, FetchGalleryResponse } from '../interfaces'

function App() {
  const [query, setQuery] = useState<string>('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  Modal.setAppElement('#root');

  useEffect(() => { 
    if (query === '') {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const fetchedPhotos: FetchGalleryResponse = await fetchGallery(query, page);
        if (fetchedPhotos.results.length === 0) {
          tryAgain();
          return;
        }
        setPhotos((prevData) => [...prevData, ...fetchedPhotos.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [page, query]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Photo) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='wrap'>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery gallery={photos} openModal={openModal} />
      )}
      {photos.length > 0 && !isLoading && <LoadMoreBtn loadMore={handleLoadMore} />}
      {isLoading && <Loader isLoading={isLoading} />}
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseClick={closeModal}
      />
    </div>
  );
}

export default App;

