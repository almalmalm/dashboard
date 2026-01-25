import { AreaChart } from '../AreaChart/AreaChart';
import { BarChart } from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import styles from './Charts.module.css';

export const Charts = () => {
  return (
    <div className={styles.container}>
      <AreaChart />
      <div className={styles.group}>
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};
