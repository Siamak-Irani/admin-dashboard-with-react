import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineController,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
  Legend,
  Tooltip
);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const array1 = [30, 40, 50, 60, 70, 35, 65];
const array2 = [200, 210, 220, 240, 250, 205, 230];

const data = {
  labels: months,
  datasets: [
    {
      label: "Budget",
      data: array1,
      backgroundColor: "#00bdae",
      hoverBackgroundColor:"#a3f0ea"
    },
    {
      label: "Expense",
      data: array2,
      backgroundColor: "#404041",
      hoverBackgroundColor:"#b9b9bd"
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        color: "#333",
        usePointStyle: true,
      },
    },
    plugins: {
      tooltip: {
        usePointStyle: true,
        callbacks: {
          title: function (tooltipItem: any, data: any) {
            console.log(tooltipItem);
            return data["labels"][tooltipItem[0]["index"]];
          },
          // label: function (tooltipItem:any, data:any) {
          //   return data['datasets'][0]['data'][tooltipItem['index']];
          // },
          // afterLabel: function (tooltipItem:any, data:any) {
          //   var dataset = data['datasets'][0];
          //   var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
          //   return ' (' + percent + '%)';
          // }
          labelPointStyle: function (context: any) {
            return {
              pointStyle: "triangle",
              rotation: 0,
            };
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false,
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        stepSize: 100,
      },
    },
  },
};

type StackedProps = {
  width: string;
  height: string;
};

const Stacked = ({ width, height }: StackedProps) => {
  return (
    <div>
      <Chart
        type={"bar"}
        data={data}
        width={width}
        height={height}
        options={options}
      />
    </div>
  );
};

export default Stacked;
