import React from "react";
import LineChart from "../charts/LineChart";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../data/dummy";

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
