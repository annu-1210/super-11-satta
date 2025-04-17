import { useEffect, useState } from "react";
import axios from "axios";

const useSheetData = (sheetName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sheetName) return;

    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_SHEET_API; 
        const res = await axios.get(`${baseUrl}?sheet=${sheetName}`);
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

  // console.log("API Base URL:", import.meta.env.VITE_SHEET_API);
  return { data, loading };
};

export default useSheetData;
