import React from "react";
import { Line } from "react-chartjs-2";
import { areaCustomSeries } from "../data/dummy";
import { Chart as ChartJS, Filler, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
// import { ChartOptions } from "chart.js";
ChartJS.register(Filler, CategoryScale , LinearScale,PointElement, LineElement);

const labels = areaCustomSeries[0].dataSource.map(
  (item) => item.x.toISOString().split("T")[0]
);

const chartData = areaCustomSeries.map((series) =>
  series.dataSource.map((source) => source.y)
);

const datasetsLabels = areaCustomSeries.map((series) => series.name);

function AreaChart() {
  console.log(chartData);
  const data = {
    labels,
    datasets: [
      {
        label: datasetsLabels[0],
        data: chartData[0],
        fill: true,
        backgroundColor: "rgba(115, 82, 255,0.2)",
        borderColor: "rgba(115, 82, 255,1)",
        tension: 0.4,
        pointBackgroundColor: "#fff",
        radius: 10,
      },
      {
        label: datasetsLabels[1],
        data: chartData[1],
        fill: true,
        backgroundColor: "rgba(255, 92, 142,0.2)",
        borderColor: "rgba(255, 92, 142,1)",
        tension: 0.4,
        pointBackgroundColor: "#fff",
        radius: 10,
      },
      {
        label: datasetsLabels[2],
        data: chartData[2],
        fill: true,
        backgroundColor: "rgba(3, 201, 215,0.2)",
        borderColor: "rgba(3, 201, 215,1)",
        tension: 0.4,
        pointBackgroundColor: "#fff",
        radius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: "drawTime: " + "Your draw time here",
      },
    },

    interaction: {
      intersect: false,
    },
  };


  

  return (
    <div className="w-10/12 mx-auto my-4">
      <Line data={data} options={options} />
    </div>
  );
}

export default AreaChart;
