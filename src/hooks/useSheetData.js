// hooks/useSheetData.js
import { useEffect, useState } from "react";
import axios from "axios";

const useSheetData = (sheetName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sheetName) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://script.google.com/macros/s/AKfycbwUcfPNJISjLKe7FPhj6MPZXtCQl-tbiX6mWA9qm_em-Um_Yl-CGfGDr4oyopZLXrZe/exec?sheet=${sheetName}`
        );
        setData(res.data?.data || []);
      } catch (err) {
        console.error("Error fetching data for:", sheetName, err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetName]);

  return { data, loading };
};

export default useSheetData;
