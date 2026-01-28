import { Bar, BarChart as Chart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './BarChart.module.css';
import { formatNumbersToThousands } from '../../helpers/formatNumbersToThousands/formatNumbersToThousands';
import { BarChartTooltip } from './BarChartTooltip';

export const BarChart = () => {
  const data = [
    {
      name: 'Linux',
      value: 4507,
      fill: 'var(--color-update)',
    },
    {
      name: 'Mac',
      value: 30000,
      fill: 'var(--color-primary)',
    },
    {
      name: 'iOS',
      value: 20000,
      fill: 'var(--color-secondary)',
    },
    {
      name: 'Windows',
      value: 40000,
      fill: 'var(--color-new)',
    },
    {
      name: 'Android',
      value: 8000,
      fill: 'var(--color-fresh)',
    },
    {
      name: 'Other',
      value: 5390,
      fill: 'var(--color-notify)',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Traffic by Device</h4>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <Chart responsive data={data}>
          <Bar dataKey="value" radius={[10, 10, 0, 0]} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis width="auto" tickFormatter={formatNumbersToThousands} axisLine={false} tickLine={false} />
          <Tooltip content={<BarChartTooltip />} />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};
