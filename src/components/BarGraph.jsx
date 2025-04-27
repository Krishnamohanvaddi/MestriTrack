import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [2, 2, 2, 2, 3, 2, 3];
const pData = [4, 3, 5, 3, 4, 3, 4];
const xLabels = [
  '25-04-2025',
  '26-04-2025',
  "27-04-2025"
];

export default function BarGraph() {
  return (
    <BarChart
      height={300}
      series={[
        { data: pData, label: 'Mestri', id: 'pvId' },
        { data: uData, label: 'Labour', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      yAxis={[{ width: 50 }]}
    />
  );
}
