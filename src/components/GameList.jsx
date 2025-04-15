import React from "react";

function GameList() {
  const dummyGameData = [
    {
      name: "DISAWAR",
      time: "02:00 AM",
      yesterday: 57,
      today: 71,
      isTodayAvailable: true,
    },
    {
      name: "PALIKA BAZAR",
      time: "01:00 PM",
      yesterday: 42,
      today: null,
      isTodayAvailable: false,
    },
    {
      name: "SADAR BAZAR",
      time: "01:20 PM",
      yesterday: 51,
      today: 3,
      isTodayAvailable: true,
    },
  ];

  return (
    <section className="w-full flex items-center justify-center bg-transparent ">
      <div className="w-full ">
        <div className="w-full flex space-x-4 bg-yellow ">
          <p className="w-full p-3 font-bold text-white bg-purple">GAME LIST</p>
          <div className="flex items-center justify-around bg- w-[75%]">
            <p className="text-lg font-semibold">कल</p>
            <p className="text-lg font-semibold">आज</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-transparent ">
          <div className="grid grid-cols-1 bg-white lg:grid-cols-3 md:grid-cols-2 w-full">
            {dummyGameData.map((game, index) => (
              <div
                className="flex items-center justify-around space-x-4 border border-gray-900 w-full"
                key={index}
              >
                <div className="w-full p-3">
                  <p className="pb-2 text-xl font-bold tracking-wide text-gray-900 uppercase cursor-pointer text-start hover:underline hover:text-black">
                    {game.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-dark-red">
                      {game.time}
                    </p>
                    <a href="/">
                      <button className="px-2 text-xs bg-yellow py-0.5 rounded-md hover:bg-light-yellow ">
                        View Chart
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-around w-[75%] !text-2xl font-medium tracking-wider">
                  {game.yesterday ?? (
                    <p className="!text-2xl font-medium tracking-wider">{game.yesterday}</p>
                  )}
                  {game.isTodayAvailable ? (
                    <p className="text-2xl font-medium tracking-wider">{game.today}</p>
                  ) : (
                    <img
                    src="/wait-button.gif" // Make sure this path is correct (should be in public/ folder)
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
