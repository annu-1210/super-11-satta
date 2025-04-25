import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { locations } from "./common/Helper";

const YearlyChart = () => {
  const [selectedLocation, setSelectedLocation] = useState("Ganga New");
  const [selectedYear, setSelectedYear] = useState(2025);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/year-records?location=${selectedLocation}&year=${selectedYear}`);
  };

  return (
    <section className="w-full flex items-center justify-center bg-transparent my-6 sm:my-10">
      <div className="flex gap-y-4 flex-col justify-center items-center py-6 sm:py-8 bg-white mx-auto w-full shadow-xl">
        <h2 className="text-xl xsm:text-2xl font-bold text-center text-black">
          Check All Game's Chart According To Year
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 xsm:gap-4 sm:flex-row w-full">
          <div className="flex flex-col items-center justify-center gap-4 xsm:flex-row ">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="py-2 text-sm uppercase bg-white rounded-md outline-none md:py-3 md:text-base lg:px-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 max-h-28 overflow-y-auto"
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 py-2 mx-0 ml-1 text-sm bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 max-h-28 overflow-y-auto outline-none md:py-3 md:text-base lg:mx-3"
            >
              {[2025, 2024, 2023].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className=" rounded-lg text-center flex items-center justify-center bg-purple !h-[38px] lg:!h-[42px] xl:!h-[46px] gradient-border3 transition-colors duration-500 text-white hover:bg-transparent hover:!text-purple w-[150px] xsm:w-[180px] xl:w-[296px] !h-10 xsm:!h-12 !h-14 px-4 xsm:px-5 md:px-6 py-2 xsm:py-3 lg:py-3.5 text-base xsm:text-lg sm:text-xl xl:text-2xl
        "
          >
            Check Chart
          </button>
        </div>
      </div>
    </section>
  );
};

export default YearlyChart;
