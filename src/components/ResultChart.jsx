import React from "react";
import ResultChartTable from "./common/ResultChartTable";

function ResultChart() {
  return (
    <section className="w-full shadow-md overflow-x-auto overflow-hidden">
      <h3
        id="date"
        className="text-material-blue-500 font-bold py-4 select-none text-[22px] lg:text-4xl uppercase text-center md:text-3xl mb-2 leading-10"
      >
        APRIL RESULT CHART 2025
      </h3>
      <ResultChartTable sheetName="AprilChart_Data1"/>
      <ResultChartTable sheetName="AprilChart_Data2"/>
    </section>
  );
}

export default ResultChart;
