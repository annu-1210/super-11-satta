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

  const headers = Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-center table-auto md:table-fixed border-collapse min-w-[800px]">
        <thead>
          <tr>
            {headers.map((key) => (
              <th
                key={key}
                className="px-4 py-3 text-white font-bold text-[14px] lg:text-base"
                style={{
                  background: "rgba(233, 78, 27, 1)", 
                  boxShadow: "inset -3px -3px 5px rgba(0,0,0,0.3), inset 3px 3px 5px rgba(255,255,255,0.1)", 
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
              className=" even:bg-white hover:bg-[#e94e1b]/50 transition-all"
            >
              {headers.map((key) => (
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
}

export default ResultChartTable;
