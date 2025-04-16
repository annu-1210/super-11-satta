import React from "react";

function GameUpdation() {
  return (
    <div
      className="w-full mx-auto mb-3 bg-black pt-3.5 lg:pt-[18px] pb-2 overflow-hidden flex
    items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full text-white text-base sm:text-lg md:text-2xl font-medium text-center md:font-medium md:text-base space-y-5">
        <div className="flex flex-col items-center justify-center w-full">
          <p>Palika Bazar</p>
          <div className="w-6 md:w-7 h-6 md:h-7 border-[3px] border-lighter-gray border-t-light-green rounded-full animate-spin"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p>Disawar</p>
          <span className="text-2xl lg:text-3xl font-bold lead ">71</span>
        </div>
      </div>
    </div>
  );
}

export default GameUpdation;
