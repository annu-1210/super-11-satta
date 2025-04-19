import React from "react";
import ResultChartTable from "./common/ResultChartTable";
import { getCurrentMonthName, getCurrentYear } from "./common/Helper";

function ResultChart() {
  const month = getCurrentMonthName();
  const year = getCurrentYear();
  return (
    <section className="w-full shadow-xl overflow-x-auto overflow-hidden mt-4">
      <h3
        id="date"
        className="text-tertiaryRed font-bold py-4 select-none text-[22px] lg:text-4xl uppercase text-center md:text-3xl md:mb-2 leading-10"
      >
        {month.toUpperCase()} CHART {year}
      </h3>

      <div className="w-full flex flex-col items-center justify-center space-y-8">
        <ResultChartTable sheetName="CurrentMonth_Chart" />
      </div>
    </section>
  );
}

export default ResultChart;
