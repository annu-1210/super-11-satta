import React from "react";
import useSheetData from "../../hooks/useSheetData";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function ResultChartTable({ sheetName = "Chart_Data1" }) {
  const { data, loading } = useSheetData(sheetName);

  if (loading) return <p className="text-center text-black py-4">Loading...</p>;

  const headers =
    Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 border-separate min-w-full table-auto whitespace-nowrap sm:table-fixed">
        <thead>
          <tr>
            {headers.map((key) => (
              <th
                key={key}
                className="py-3 bg-seafoam-green shadow-custom-inset1 sticky rounded-lg lg:rounded-xl left-0 z-20 text-center sm:text-left px-3 lg:pl-8 text-[12px] lg:text-base font-bold text-white"
              >
                <strong>{key}</strong>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {headers.map((key) => (
                <td
                  key={key}
                  className="text-white text-left sticky left-0 z-20 sm:px-6 px-3 lg:py-4 py-3 bg-dusty-navy shadow-custom-inset2 text-sm font-semibold whitespace-nowrap lg:text-base rounded-lg"
                >
                  {key === "Date" ? formatDate(row[key]) : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultChartTable;
