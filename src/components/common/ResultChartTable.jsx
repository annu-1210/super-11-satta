import React from "react";
import useSheetData from "../../hooks/useSheetData";
import { formatDate } from "./Helper";

function ResultChartTable({ sheetName = "CurrentMonth_Chart" }) {
  const { data, loading } = useSheetData(sheetName);

  if (loading) return <p className="text-center text-black py-4">Loading...</p>;

  const headers =
    Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : [];

  const firstSet = headers.slice(0, 5);
  const secondSet = [headers[0], ...headers.slice(5)];

  const renderTable = (cols) => (
    <div className="w-full overflow-x-auto ">
      <table className="w-full text-sm text-center table-auto md:table-fixed border-collapse min-w-[800px]">
        <thead>
          <tr>
            {cols.map((key) => (
              <th
                key={key}
                className="px-4 py-3 text-white font-bold text-[14px] lg:text-base border border-gray-300"
                style={{
                  background: "rgb(99, 49, 140)",
                }}
              >
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="even:bg-[#f6f6f6] hover:bg-[#63318c]/50 transition-all"
            >
              {cols.map((key) => (
                <td
                  key={key}
                  className="px-4 py-3 font-semibold text-secondary text-[13px] lg:text-[15px] border border-gray-300"
                >
                  {key === "Date" ? formatDate(row[key]) : row[key] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full">
      {renderTable(firstSet)}
      {renderTable(secondSet)}
    </div>
  );
}

export default ResultChartTable;
