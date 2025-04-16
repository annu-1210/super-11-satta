import React, { useEffect, useState } from "react";

function LiveClock() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const options = { timeZone: "Asia/Kolkata" };
      const dateTimeInIndia = new Date(now.toLocaleString("en-US", options));

      const month = dateTimeInIndia.toLocaleString("en-US", { month: "long" });
      const day = dateTimeInIndia.getDate();
      const year = dateTimeInIndia.getFullYear();

      let hours = dateTimeInIndia.getHours();
      const minutes = dateTimeInIndia.getMinutes().toString().padStart(2, "0");
      const seconds = dateTimeInIndia.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedHours = hours.toString().padStart(2, "0");

      const formattedDateTime = `${month} ${day}, ${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;

      setDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{dateTime}</>;
}

export default LiveClock;
