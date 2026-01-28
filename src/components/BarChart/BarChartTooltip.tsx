import React from 'react';
import styles from './BarChart.module.css';

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

export const BarChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className={styles.tooltipContainer}>
      <span className={styles.tooltipLabel}>{label}</span>
      <div className={styles.tooltipValues}>
        <span>
          Users : <span className={styles.tooltipValue}>{payload[0].value}</span>
        </span>
        <span></span>
      </div>
    </div>
  );
};
