import { Grid } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className={s.loader}>
      <Grid 
        visible={isLoading}
        height='70'
        width='70'
        color='#1f24cc'
        ariaLabel='grid-loading'
        radius='13'
        wrapperClass='grid-wrapper'
      />
    </div>
  );
};

export default Loader;
