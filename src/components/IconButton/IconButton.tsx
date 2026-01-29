import styles from './IconButton.module.css';
import { HiPlus } from 'react-icons/hi';

interface IconButtonProps {
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <HiPlus />
    </div>
  );
};
