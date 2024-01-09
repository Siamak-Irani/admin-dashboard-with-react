import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Chart } from "react-chartjs-2";

type LineChartProps = {
  chartData: any;
};

const LineChart = ({ chartData }: LineChartProps) => {
  const { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } = chartData;

  const names = lineCustomSeries.map((item: any) => item.name);
  const dataSource = lineCustomSeries.map((item: any) => item.dataSource);

  const data: ChartData = {
    labels: dataSource[0].map((item: any) => item.x.getFullYear()),
    datasets: [
      {
        label: names[0],
        data: dataSource[0].map((item: any) => item.y),
        // backgroundColor: "#06bfb0",
        borderColor: "#06bfb0",
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBackgroundColor: "white",
      },
      {
        label: names[1],
        data: dataSource[1].map((item: any) => item.y),
        borderColor: "#414141",
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBackgroundColor: "white",
      },
      {
        label: names[2],
        data: dataSource[2].map((item: any) => item.y),
        borderColor: "#4b8ad7",
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBackgroundColor: "white",
      },
    ],
  };
  const options: ChartOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        labels: {
          color: "#333",
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default LineChart;
