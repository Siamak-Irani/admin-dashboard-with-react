import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(LinearScale, PointElement, LineElement);

function SparkLine() {
  return (
    <div className="chart-container">
      <Line
        data={{
          datasets: [
            {
              data: [
                { x: 1, y: 2 },
                { x: 2, y: 6 },
                { x: 3, y: 8 },
                { x: 4, y: 5 },
                { x: 5, y: 10 },
              ],
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
              pointRadius: 0,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: { display: false },
            datalabels: {
              display: false,
            },
          },
          scales: {
            x: {
              type: "linear",
              min: 1,
              max: 5,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default SparkLine;
