import React from "react";
import useSheetData from "../hooks/useSheetData";

const formatTime = (timeString) => {
  try {
    let date;
    if (timeString && !isNaN(new Date(timeString).getTime())) {
      date = new Date(timeString);
    } else {
      const [hours, minutes] = timeString.split(":");
      date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
    }

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleTimeString("en-US", options);
  } catch (error) {
    return timeString;
  }
};

function GameList({ sheetName = "Game_List1" }) {
  const { data, loading } = useSheetData(sheetName);
  console.log("Game List Data:", data);

  if (loading) return <p className="text-center text-black py-4">Loading...</p>;

  return (
    <section className="w-full flex items-center justify-center bg-transparent mb-6">
      <div className="w-full">
        <div className="w-full flex space-x-4 bg-yellow">
          <p className="w-full p-3 font-bold text-white bg-purple">GAME LIST</p>
          <div className="flex items-center justify-around w-[75%]">
            <p className="text-lg font-semibold">कल</p>
            <p className="text-lg font-semibold">आज</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-transparent">
          <div className="grid grid-cols-1 bg-white lg:grid-cols-3 md:grid-cols-2 w-full">
            {Array.isArray(data) &&
              data.map((game, index) => (
                <div
                  className="flex items-center justify-around space-x-4 border border-gray-900 w-full"
                  key={index}
                >
                  <div className="w-full p-3">
                    <p className="pb-2 text-xl font-bold tracking-wide !text-gray-900 uppercase cursor-pointer text-start hover:underline hover:text-black">
                      {game.Name}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-dark-red">
                        {formatTime(game.Time)}
                      </p>
                      <a href="/">
                        <button className="px-2 text-xs bg-yellow py-0.5 rounded-md hover:bg-light-yellow">
                          View Chart
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-around w-[75%] !text-2xl font-medium tracking-wider">
                    {game.Yesterday ?? (
                      <p className="!text-2xl font-medium tracking-wider">
                        {game.Yesterday}
                      </p>
                    )}
                    {game.isTodayAvailable ? (
                      <p className="text-2xl font-medium tracking-wider">
                        {game.Today}
                      </p>
                    ) : (
                      <img
                        src="/wait-button.gif" 
                        alt="WAIT"
                        className="h-10 w-10 mx-auto"
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameList;
