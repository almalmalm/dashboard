import styles from './Card.module.css';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

interface Card {
  title: string;
  value: number;
  change: number;
}

export const Card: React.FC<Card> = ({ title, value, change }) => {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <div className={styles.stats}>
        <span className={styles.value}>{value}</span>
        <div className={`${styles.change} ${change < 0 ? styles.negative : styles.positive}`}>
          {change < 0 ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
          <span>{change < 0 ? change : `+${change}`}%</span>
        </div>
      </div>
    </div>
  );
};
