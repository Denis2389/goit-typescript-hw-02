import s from '../LoadMoreBtn/LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
