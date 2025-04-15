import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { locations } from "./common/Helper";

const YearlyChart = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // if (!selectedLocation || !selectedYear) return alert("Please select both");
    navigate(`/year-records?location=${selectedLocation}&year=${selectedYear}`);
  };

  return (
    <div className="flex gap-y-4 flex-col justify-center items-center py-8 bg-grey mx-auto w-full">
      <h2 className="text-2xl font-bold text-center text-white">
        Check All Game Year Chart
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="py-2 text-sm uppercase bg-white rounded-md outline-none md:py-3 md:text-base lg:px-3"
        >
          {/* <option value="">Select Location</option> */}
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-2 py-2 mx-0 ml-1 text-sm bg-white rounded-md outline-none md:py-3 md:text-base lg:mx-3"
        >
          {/* <option value="">Select Year</option> */}
          {[2025, 2024, 2023].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="px-5 py-2.5 border-none text-white text-[17px] rounded-md tracking-[4px] font-bold uppercase transition-shadow duration-500 bg-light-blue shadow-[0_0_25px_#008cff]"
        >
          Check Chart
        </button>
      </div>
    </div>
  );
};

export default YearlyChart;
