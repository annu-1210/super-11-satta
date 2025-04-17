import React from "react";
import useSheetData from "../hooks/useSheetData";

function GameUpdation() {
  const { data: upcomingData } = useSheetData("Upcoming_Game");
  const { data: resultsData } = useSheetData("OnGoing_Game");

  const upcomingGame = upcomingData[0]?.GameName || "Loading...";
  const resultGame = resultsData[0]?.GameName || "Loading...";
  const currentResult = resultsData[0]?.CurrentResult || "--";

  return (
    <div
    // custom-gradient3
      className="w-full mx-auto mb-3 pt-3.5 lg:pt-[18px] pb-2 overflow-hidden flex
    items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full text-white text-base sm:text-lg md:text-2xl font-medium text-center md:font-medium md:text-base space-y-5">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-2xl">{upcomingGame}</p>
          <div className="w-6 md:w-7 h-6 md:h-7 border-[3px] border-lighter-gray border-t-glassMedium rounded-full animate-spin"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-xl">{resultGame}</p>
          <span className="text-2xl lg:text-3xl font-bold lead ">
            {currentResult}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameUpdation;
