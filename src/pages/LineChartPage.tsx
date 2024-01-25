import React from "react";
import LineChart from "../charts/LineChart";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../data/dummy";

import { Chart as ChartJS, Filler, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(Filler, CategoryScale , LinearScale,PointElement, LineElement);


const LineChartPage = () => {
  return (
    <div className="w-10/12 mx-auto">
      <LineChart
        chartData={{
          lineCustomSeries,
          LinePrimaryXAxis,
          LinePrimaryYAxis,
        }}
      />
    </div>
  );
};

export default LineChartPage;
