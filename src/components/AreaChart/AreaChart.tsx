import { Area, AreaChart as Chart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './AreaChart.module.css';
import { formatNumbersToThousands } from '../../helpers/formatNumbersToThousands/formatNumbersToThousands';
import { AreaChartTooltip } from './AreaChartTooltip';

export const AreaChart = () => {
  const data = [
    {
      name: 'Jan',
      registered: 4000,
      unregistered: 2400,
    },
    {
      name: 'Feb',
      registered: 3000,
      unregistered: 1398,
    },
    {
      name: 'Mar',
      registered: 2000,
      unregistered: 9800,
    },
    {
      name: 'Apr',
      registered: 2780,
      unregistered: 3908,
    },
    {
      name: 'May',
      registered: 1890,
      unregistered: 4800,
    },
    {
      name: 'Jun',
      registered: 2390,
      unregistered: 3800,
    },
    {
      name: 'Jul',
      registered: 3490,
      unregistered: 4300,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Total users</h4>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <Chart responsive data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis width="auto" tickFormatter={formatNumbersToThousands} axisLine={false} tickLine={false} />
          <Tooltip content={<AreaChartTooltip />} />
          <Area
            type="monotone"
            dataKey="unregistered"
            stroke="var(--color-primary)"
            fill="none"
            strokeWidth={2}
            strokeDasharray="3 5"
          />
          <Area type="monotone" dataKey="registered" stroke="var(--color-primary)" fill="var(--color-primary-light)" />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};
