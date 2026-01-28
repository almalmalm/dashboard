import React from 'react';
import styles from './AreaChart.module.css';

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

export const AreaChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className={styles.tooltipContainer}>
      <span className={styles.tooltipLabel}>{label}</span>
      <div className={styles.tooltipValues}>
        <span>
          {payload[0].name.charAt(0).toUpperCase() + payload[0].name.slice(1)}:{' '}
          <span className={styles.tooltipValue}>{payload[0].value}</span>
        </span>
        <span>
          {payload[1].name.charAt(0).toUpperCase() + payload[1].name.slice(1)}:{' '}
          <span className={styles.tooltipValue}>{payload[1].value}</span>
        </span>
      </div>
    </div>
  );
};
