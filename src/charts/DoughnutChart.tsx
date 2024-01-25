import { ChartData, ChartOptions, PointElement } from "chart.js";
import React from "react";
import { Chart } from "react-chartjs-2";
import ChartJSDatalabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-datalabels";

import { Chart as ChartJS, DoughnutController, ArcElement } from "chart.js";

ChartJS.register(DoughnutController, ArcElement, ChartJSDatalabels, PointElement);

type EcomPieChartData = { x: string; y: number; text: string }[];

type DoughnutChartProps = {
  chartData: EcomPieChartData;
  height: string;
};

const DoughnutChart = ({ chartData, height }: DoughnutChartProps) => {
  const chartDataArray = chartData.map((item) => item.y);
  const percentageArray = chartData.map((item) => item.text);

  const data: ChartData = {
    labels: ["2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: chartDataArray,
        backgroundColor: ["#00bdae", "#404041", "#367cd2", "#e56590"],
        hoverOffset: 5,
      },
    ],
  };
  const options: ChartOptions = {
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled:false,
        usePointStyle: true,
      },
      datalabels: {
        display: true,
        formatter: (value: any, context: any) => {
          return context.chart.data.labels[context.dataIndex];
        },
        color: "#ffffff",
        font: {
          size: 10,
        },
      },
    },
  };

  return (
    <div>
      <Chart type="doughnut" data={data} options={options} height={height} />
    </div>
  );
};

export default DoughnutChart;
