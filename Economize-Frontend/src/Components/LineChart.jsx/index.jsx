import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default function LineGraph() {
  return (
    <div>
      <Line
  width={0.2}
  height={200}
  data={{
    labels: ["12AM", "4AM", "8AM", "12PM", "4PM", "8PM", "12PM"],
    datasets: [
      {
        label: '1',
        data: [20000, 40000, 35000, 80000, 60000, 70000, 80000],
        fill: 'origin', 
        backgroundColor: 'rgba(30, 144, 255, 0.3)', 
        borderColor: '#1E90FF',
      },
      {
        label: '2',
        data: [50000, 30000, 60000, 70000, 80000, 50000, 40000],
        fill: 'origin', 
        backgroundColor: 'rgba(255, 165, 0, 0.3)', 
        borderColor: 'orange',
      },
    ],
  }}
  options={{
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value / 1000}k`,
        },
      },
    },
    elements: {
      line: {
        cubicInterpolationMode: 'monotone',
      },
    },
  }}
/>

    </div>
  );
}