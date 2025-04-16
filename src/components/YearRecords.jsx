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
    <section className=" w-full mx-auto py-4">
      <div
        style={{
          background: "#21739c",
          boxShadow: "inset -5px -5px 22px #0d2e3e, inset 5px 5px 22px #35b8fa",
        }}
        className="flex items-center justify-center p-2 xsm:p-4 lg:px-4 lg:py-2 lg:pt-6 mx-4 my-2 rounded-xl"
      >
        <h2 className="lg:mb-4 font-semibold leading-10 text-center text-white text-base xsm:text-xl md:text-2xl lg:text-3xl">
          {location} - {year}
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : data.length === 0 ? (
        <p className="text-center text-red-500">No data found.</p>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full table-auto border border-collapse text-sm text-white">
            <thead className="bg-deep-tealGreen">
              <tr>
                <th
                  className="p-3 w-[237.25px]"
                  style={{
                    background: "#044e41",
                    boxShadow:
                      "inset -5px -5px 22px #021f1a, inset 5px 5px 22px #067d68",
                  }}
                >
                  Date
                </th>
                {months.map((month) => (
                  <th
                    key={month}
                    className="p-3"
                    style={{
                      background: "#044e41",
                      boxShadow:
                        "inset -5px -5px 22px #021f1a, inset 5px 5px 22px #067d68",
                    }}
                  >
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="even:bg-gray-50">
                  <td
                    className=" py-1 text-center border border-[#640080]"
                    style={{
                      background: "#640080",
                      boxShadow:
                        "inset -5px -5px 5px #280033, inset 5px 5px 5px #a000cd",
                    }}
                  >
                    {row.Date}
                  </td>
                  {months.map((month) => (
                    <td
                      key={month}
                      className="py-1 text-center border border-[#640080]"
                      style={{
                        background: "#640080",
                        boxShadow:
                          "inset -5px -5px 5px #280033, inset 5px 5px 5px #a000cd",
                      }}
                    >
                      {row[month] || "-"}
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
