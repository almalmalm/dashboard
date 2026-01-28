import React from 'react';
import styles from './PieChart.module.css';

interface TooltipPayloadItem {
  name: string;
  value: number | string;
  color?: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

export const PieChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className={styles.tooltipContainer}>
      <span>{payload[0].name}</span>
      <div className={styles.tooltipValues}>
        <span className={styles.tooltipValue}>{payload[0].value}%</span>
      </div>
    </div>
  );
};
