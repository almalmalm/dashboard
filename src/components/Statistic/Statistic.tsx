import { Card } from '../Card/Card';
import styles from './Statistic.module.css';

export default function Statistic() {
  return (
    <div className={styles.container}>
      <Card title="Views" value={24895} change={4.5} />
      <Card title="Visits" value={12345} change={-0.03} />
      <Card title="New Users" value={1267} change={5.8} />
      <Card title="Active Users" value={18765} change={3.2} />
    </div>
  );
}
