import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';

export default function PieGraph() {

  const workersList = useSelector((state) => state.workers.addedWorkersList);

  const mestriCount = workersList.filter(worker => worker.Type === 'Mestri').length;
  const labourCount = workersList.filter(worker => worker.Type === 'Labour').length;
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: mestriCount, label: 'Mestri' },
            { id: 1, value: labourCount, label: 'Labour' },
          ],
        },
      ]}
      width={250}
      height={250}
    />
  );
}
