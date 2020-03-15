import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  console.log('new url in use stats util', url);
  useEffect(() => {
    setLoading(true);
    setError();

    async function fetchData() {
      const data = await fetch(url).then((response) => {
        return response.json();
      }).catch((err) => {
        setError(err);
        return;
      });
      setLoading(false);
      if (data && data.error) {
        setError(data.error.message);
      } else {
        setStats(data);
      }
    };
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error,
  };
}