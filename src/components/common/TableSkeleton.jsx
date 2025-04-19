import React from 'react';

const TableSkeleton = ({ columns = 4, rows = 5 }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-center table-auto md:table-fixed border-collapse min-w-[800px]">
        <thead>
          <tr>
            {Array(columns).fill(0).map((_, index) => (
              <th 
                key={index}
                className="px-4 py-3 text-transparent border border-gray-200 animate-pulse"
                style={{ background: "rgba(233, 78, 27, 0.2)" }}
              >
                <div className="h-6 bg-gray-300 rounded w-full"></div>
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {Array(rows).fill(0).map((_, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {Array(columns).fill(0).map((_, colIndex) => (
                <td 
                  key={colIndex}
                  className="px-4 py-3 border border-gray-200 animate-pulse"
                >
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;