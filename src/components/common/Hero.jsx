import React from "react";
import LiveClock from "../LiveClock";
import GameUpdation from "../GameUpdation";
import InstructorIntro from "../InstructorIntro";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useSheetData from "../../hooks/useSheetData";
import { formatTime } from "./Helper";

function Hero() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isYearRecord = location.pathname === "/year-records";
  const isChart = location.pathname === "/chart";
  const isPrivacyPolicy = location.pathname === "/privacy-policy";
  const isTermsConditions = location.pathname === "/terms-conditions";

  const { data: resultsData } = useSheetData("OnGoing_Game");

  const resultGame = resultsData[0]?.GameName || "Loading...";
  const currentResult = resultsData[0]?.CurrentResult || "--";
  const previousResult = resultsData[0]?.PreviousResult || "--";
  const time = resultsData[0]?.Time || "--:--";

  const formattedTime = formatTime(time);
  return (
    <section className="w-full flex items-center justify-center bg-transparent mx-auto">
      <div className="w-full flex flex-col items-center justify-center space-y-2 ">
        <div className="flex w-full bg-custom-gradient3 flex-col items-center justify-center space-y-2 sm:space-y-3 text-center text-black text-lg font-bold p-2 sm:p-4 shadow-lg border border-gray-300">
          <Navbar />
          <h3 className="uppercase text-creamyTexture tracking-widest text-xl md:text-2xl">
            Welcome to super-11-satta
          </h3>
          <p className="text-glassMedium text-xl">
            <LiveClock />
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 w-full">
            <GameUpdation />
            {!isYearRecord && isHome && <InstructorIntro />}
          </div>
        </div>
        {!isYearRecord && !isPrivacyPolicy && !isTermsConditions && (
          <div className="flex flex-col items-center justify-center w-full pt-4">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-lg sm:text-xl font-bold uppercase">
                {resultGame}
              </p>
              <p className="py-1 sm:py-2 text-sm text-gray-800">
                ({formattedTime})
              </p>
              <div className="flex items-center justify-center">
                <strong className="text-xl sm:text-2xl">
                  &#123; {previousResult} &#125;
                </strong>
                <FaArrowRight />
                <strong className="text-xl sm:text-2xl">
                  &#123; {currentResult} &#125;
                </strong>
              </div>
            </div>
            {isHome && (
              <h4 className="w-full max-w-[1264px] flex items-center justify-center text-center text-ironGray shadow-xl border rounded-xl leading-6 font-semibold h-fit px-1 sm:px-4 sm:pt-4 py-2 mx-0 sm:mx-2 mt-6 sm:mt-6 my-2 leading-6 border-transparent rounded-none font-normal shadow-none text-sm sm:text-lg">
                To Check instant A11 SATTA KING Results , Check Below Chart  👇🏻
              </h4>
            )}

            {isChart && (
              <h4 className="w-full max-w-[1264px] flex items-center justify-center text-center text-ironGray shadow-xl border rounded-xl leading-6 font-semibold h-fit px-1 sm:px-4 sm:pt-4 py-2 mx-0 sm:mx-2 mt-6 sm:mt-6 my-2 leading-6 border-transparent rounded-none font-normal shadow-none text-sm sm:text-lg">
                To Check instant SATTA KING DELHI 6 Results , Check Below Chart
                👇🏻
              </h4>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
