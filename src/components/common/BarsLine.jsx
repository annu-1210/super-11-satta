import React from "react";

function BarsLine() {
  return (
    <div className="flex space-x-0.5">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="h-2 w-4 bg-black"></div>
      ))}
    </div>
  );
}

export default BarsLine;
