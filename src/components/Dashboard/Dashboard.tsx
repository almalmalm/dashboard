import Statistic from '../Statistic/Statistic';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h3>Dashboard</h3>
      <Statistic />
    </div>
  );
}
