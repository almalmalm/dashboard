import { Card } from '../Card/Card';
import styles from './Statistic.module.css';

export default function Statistic() {
  return (
    <div className={styles.container}>
      <Card title="Views" value={24895} change={4.5} />
      <Card title="Clicks" value={12345} change={-2.3} />
      <Card title="Conversions" value={5678} change={1.8} />
      <Card title="Revenue" value={98765} change={3.2} />
    </div>
  );
}
