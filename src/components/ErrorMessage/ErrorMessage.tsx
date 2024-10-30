import toast from 'react-hot-toast';
import s from '../ErrorMessage/ErrorMessage.module.css';

export const warning = (): void => {
  toast.error('Please enter the search query', {
    duration: 2000,
  });
};

export const tryAgain = (): void => {
  toast.error('No result, try again!', {
    duration: 2000,
  });
};

export default function ErrorMessage(): JSX.Element {
  return (
    <p className={s.text}>
      Ops.. Something went wrong. Try to reload the page!
    </p>
  );
}
