import React from "react";
import useSheetData from "../../hooks/useSheetData";
import { useNavigate } from "react-router-dom";
import { formatTime } from "./Helper";

function GameList({ sheetName = "TodayGame_sheet" }) {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const { data, loading } = useSheetData(sheetName);
  // console.log("Game List Data:", data);

  if (loading) return <p className="text-center text-black py-4">Loading...</p>;

  return (
    <section className="w-full flex items-center justify-center bg-transparent my-10 2xl:my-12">
      <div className="w-full overflow-x-auto flex flex-col items-center justify-center space-y-4">
        <h2 className="uppercase text-2xl md:text-4xl font-bold">Game List</h2>

        <div className="w-full flex flex-wrap justify-center gap-4">
          {Array.isArray(data) &&
            data.map((game, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden md:max-w-[330px] lg:max-w-[300px] 2xl:max-w-[330px] w-full"
              >
                <table className="w-full text-center">
                  <thead className="bg-blue text-white">
                    <tr>
                      <th
                        colSpan="2"
                        className="p-3 bg-tertiary font-bold border border-tertiary uppercase"
                      >
                        {game.Name}
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-black">
                    <tr>
                      <td colSpan="2" className="p-2 border border-gray-300">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-dark-red">
                            {formatTime(game.Time)}
                          </p>
                          <button
                            className="p-1 text-xs bg-tertiary rounded-md hover:bg-primary text-white"
                            onClick={() =>
                              navigate(
                                `/year-records?location=${encodeURIComponent(
                                  game.Name
                                )}&year=${currentYear}`
                              )
                            }
                          >
                            View Chart
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 font-bold border border-gray-300">
                        कल
                      </td>
                      <td className="p-2 text-2xl font-medium border border-gray-300">
                        {game.Yesterday ?? "-"}
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 font-bold border border-gray-300">
                        आज
                      </td>
                      <td className="p-2 text-2xl font-medium border border-gray-300">
                        {game.isTodayAvailable ? (
                          <span>{game.Today}</span>
                        ) : (
                          <img
                            src="/wait-button.gif"
                            alt="WAIT"
                            className="h-8 w-8 mx-auto"
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default GameList;
