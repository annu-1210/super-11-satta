import React from "react";
import { resultsArr } from "./common/Helper";

function Results() {
  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center py-1 sm:py-0">
      {resultsArr.map((result, index) => (
        <h4
          key={index}
          className="py-1 sm:py-2 text-xs sm:text-sm font-semibold text-center text-gray-900 w-full"
        >
          {result}
        </h4>
      ))}
    </div>
  );
}

export default Results;
