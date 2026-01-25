import { PieChart as Chart, Legend, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './PieChart.module.css';

export default function PieChart() {
  const data = [
    { name: 'United States', value: 52.1, fill: 'var(--color-primary)' },
    { name: 'Canada', value: 22.8, fill: 'var(--color-secondary)' },
    { name: 'Mexico', value: 13.9, fill: 'var(--color-new)' },
    { name: 'Other', value: 11.2, fill: 'var(--color-fresh)' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Traffic by Location</h4>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <Chart responsive>
          <Pie
            data={data}
            innerRadius="60%"
            outerRadius="100%"
            cornerRadius="10%"
            paddingAngle={1}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            content={({ payload }) => {
              if (!payload) return null;
              const sorted = [...payload].sort((a, b) => b?.payload?.value - a?.payload?.value);

              return (
                <ul className={styles.legend}>
                  {sorted.map((item) => (
                    <li key={item.value} className={styles.legendItem}>
                      <span className={styles.dot} style={{ backgroundColor: item.color }} />
                      <span className={styles.label}>
                        {item.value} ({item?.payload?.value}%)
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }}
          />
          <Tooltip />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}
