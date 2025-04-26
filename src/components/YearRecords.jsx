import { useLocation } from "react-router-dom";
import useSheetData from "../hooks/useSheetData";

function useQuery() {
  const { search } = useLocation();
  return Object.fromEntries(new URLSearchParams(search));
}

const YearRecords = () => {
  const query = useQuery();
  const { location, year } = query;

  const sheetName = `${location.trim().replace(/\s+/g, "")}_${year}`;
  const { data, loading } = useSheetData(sheetName);

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  return (
    <section className="w-full mx-auto py-4">
      <div
        className="flex items-center justify-center p-4 my-2 shadow-lg w-full"
        style={{
          background: "rgb(99, 49, 140)",
          boxShadow:
            "inset -5px -5px 22px rgba(0,0,0,0.2), inset 5px 5px 22px rgba(255,255,255,0.1)",
        }}
      >
        <h2 className="font-bold leading-10 text-center text-white text-xl md:text-3xl uppercase tracking-wide">
          {location} - {year}
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-secondary animate-bounce font-semibold text-xl">Loading...</p>
      ) : data.length === 0 ? (
        <p className="text-center text-dark-muted-red">No data found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-sm text-center border-collapse">
            <thead>
              <tr>
                <th
                  className="px-4 py-3 text-white font-bold text-[14px] lg:text-base"
                  style={{
                    background: "rgb(99, 49, 140)",
                    boxShadow:
                      "inset -3px -3px 5px rgba(0,0,0,0.3), inset 3px 3px 5px rgba(255,255,255,0.1)",
                  }}
                >
                  DATE
                </th>
                {months.map((month) => (
                  <th
                    key={month}
                    className="px-4 py-3 text-white font-bold text-[13px] lg:text-[14px]"
                    style={{
                      background: "rgb(99, 49, 140)",
                      boxShadow:
                        "inset -3px -3px 5px rgba(0,0,0,0.3), inset 3px 3px 5px rgba(255,255,255,0.1)",
                    }}
                  >
                    {month}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="even:bg-white transition-all hover:cursor-pointer"
                >
                  <td className="px-4 py-2 font-semibold text-gray-800 border border-light-gray">
                    {row.Date}
                  </td>

                  {months.map((month) => (
                    <td
                      key={month}
                      className="px-4 py-2 font-semibold text-gray-800 border border-light-gray"
                    >
                     {(row[month] === 0 || row[month]) ? String(row[month]).padStart(2, "0") : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default YearRecords;
