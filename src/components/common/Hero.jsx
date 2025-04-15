import React from "react";
import LiveClock from "../LiveClock";
import GameUpdation from "../GameUpdation";
import InstructorIntro from "../InstructorIntro";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Hero() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <section className="w-full flex items-center justify-center bg-transparent ">
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        <div className="flex flex-col items-center justify-center space-y-2 text-center text-black text-lg font-bold">
          <h3 className="uppercase">Welcome to super-7-satta</h3>
          <p>
            <LiveClock />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 w-full">
          <GameUpdation />
          {isHome && <InstructorIntro />}
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-1">
          <div className="flex flex-col items-center justify-center w-full">
            <p className=" text-xl font-bold uppercase">Disawar</p>
            <p className="py-2 text-sm text-gray-800">&#40; 2:00 am &#41;</p>
            <div className="flex items-center justify-center">
              <strong className="text-2xl">&#123; 57 &#125;</strong>
              <FaArrowRight />
              <strong className="text-2xl">&#123; 71 &#125;</strong>
            </div>
          </div>
          <h4 className="bg-yellow-cream w-full max-w-[1264px] flex items-center justify-center text-center text-black px-4 py-2 shadow-xl border pt-4 mx-2 my-2 rounded-xl leading-6 font-semibold h-fit px-0 mx-0 pt-2 py-2 leading-6 border-transparent rounded-none font-normal shadow none text-lg">
            To Check instant A7 SATTA KING Results , Check Below Chart 👇🏿
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;
