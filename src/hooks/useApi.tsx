import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.pexels.com/v1/";

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export async function useApi(endpoint: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await http.get(baseUrl + endpoint);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
