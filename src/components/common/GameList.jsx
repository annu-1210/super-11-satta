import React from "react";
import useSheetData from "../../hooks/useSheetData";
import { useNavigate } from "react-router-dom";
import { formatTime } from "./Helper";

function GameList({ sheetName = "Game_List1" }) {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const { data, loading } = useSheetData(sheetName);
  // console.log("Game List Data:", data);

  if (loading) return <p className="text-center text-black py-4">Loading...</p>;

  return (
    <section className="w-full flex items-center justify-center bg-transparent my-6">
  <div className="w-full overflow-x-auto flex flex-col items-center justify-center space-y-4">
    <h2 className="uppercase text-2xl md:text-4xl font-bold">
      Check New Data
    </h2>

    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px] border-collapse text-center">
        <thead className="bg-primary text-white">
          <tr>
            <th className="p-3 bg-tertiary font-bold border border-tertiary">
              GAME LIST
            </th>
            <th className="p-3 font-bold border border-primary">कल</th>
            <th className="p-3 font-bold border border-primary">आज</th>
          </tr>
        </thead>

        <tbody className="text-black">
          {Array.isArray(data) &&
            data.map((game, index) => (
              <tr key={index}>
                {/* Game List Column */}
                <td className="p-4 flex flex-col items-start space-y-1 border border-gray-300">
                  <p
                    className="text-base md:text-xl font-bold tracking-wide uppercase hover:underline cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/year-records?location=${encodeURIComponent(
                          game.Name
                        )}&year=${currentYear}`
                      )
                    }
                  >
                    {game.Name}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-sm font-semibold text-dark-red">
                      {formatTime(game.Time)}
                    </p>
                    <button
                      className="p-2 text-xs bg-tertiary rounded-md hover:bg-primary ml-2 text-white"
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

                {/* Yesterday Column */}
                <td className="p-4 text-2xl font-medium tracking-wider border border-gray-300">
                  {game.Yesterday ?? "-"}
                </td>

                {/* Today Column */}
                <td className="p-4 text-2xl font-medium tracking-wider border border-gray-300">
                  {game.isTodayAvailable ? (
                    <span>{game.Today}</span>
                  ) : (
                    <img
                      src="/wait-button.gif"
                      alt="WAIT"
                      className="h-10 w-10 mx-auto"
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

  );
}

export default GameList;
