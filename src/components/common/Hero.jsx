import React from "react";
import LiveClock from "../LiveClock";
import GameUpdation from "../GameUpdation";
import InstructorIntro from "../InstructorIntro";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Hero() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isYearRecord = location.pathname === "/year-records";
  return (
    <section className="w-full flex items-center justify-center bg-transparent mt-6 sm:mt-0">
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 text-center text-black text-lg font-bold">
          <h3 className="uppercase">Welcome to super-7-satta</h3>
          <p>
            <LiveClock />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 w-full">
          <GameUpdation />
          {!isYearRecord && isHome && <InstructorIntro />}
        </div>
        {!isYearRecord && (
          <div className="flex flex-col items-center justify-center w-full pt-4 sm:pt-1">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-lg sm:text-xl font-bold uppercase">Disawar</p>
              <p className="py-1 sm:py-2 text-sm text-gray-800">&#40; 2:00 am &#41;</p>
              <div className="flex items-center justify-center">
                <strong className="text-xl sm:text-2xl">&#123; 57 &#125;</strong>
                <FaArrowRight />
                <strong className="text-xl sm:text-2xl">&#123; 71 &#125;</strong>
              </div>
            </div>
            <h4 className="bg-yellow-cream w-full max-w-[1264px] flex items-center justify-center text-center text-black shadow-xl border rounded-xl leading-6 font-semibold h-fit px-1 sm:px-4 sm:pt-4 py-2 mx-0 sm:mx-2 mt-6 sm:mt-2 my-2 leading-6 border-transparent rounded-none font-normal shadow none text-sm sm:text-lg">
              To Check instant A7 SATTA KING Results , Check Below Chart 👇🏿
            </h4>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
