import React from "react";
import ResultChartTable from "./common/ResultChartTable";
import { getCurrentMonthName, getCurrentYear } from "./common/Helper";

function ResultChart() {
  const month = getCurrentMonthName();
  const year = getCurrentYear();
  return (
    <section className="w-full shadow-md overflow-x-auto overflow-hidden">
      <h3
        id="date"
        className="text-material-blue-500 font-bold py-4 select-none text-[22px] lg:text-4xl uppercase text-center md:text-3xl md:mb-2 leading-10"
      >
        {month.toUpperCase()} RESULT CHART {year}
      </h3>
      <ResultChartTable sheetName="Chart_Data1" />
      <ResultChartTable sheetName="Chart_Data2" />
    </section>
  );
}

export default ResultChart;
