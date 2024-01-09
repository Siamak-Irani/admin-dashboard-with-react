import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import LineChart from "./LineChart";

Chart.register(LinearScale, PointElement, LineElement);

type SparklineAreaDataType = { x: number; yval: number }[];

type SparkLineProps = {
  chartData: SparklineAreaDataType;
  color: string;
};

function SparkLine({ chartData, color }: SparkLineProps) {
  const lineChartData = chartData.map((item) => {
    return { x: item.x, y: item.yval };
  });

  return (
    <div className="chart-container">
      <Line
        data={{
          datasets: [
            {
              data: lineChartData,
              borderColor: color,
              borderWidth: 2,
              pointRadius: 1,
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
