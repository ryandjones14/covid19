import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();
  console.log('new url in use stats util', url);
  useEffect(() => {
    console.log('mounting or updating');
    async function fetchData() {
      const data = await fetch(url).then(response =>
        response.json()
        );
      console.log('overall data', data);
      setStats(data);
    };
    fetchData();
  }, [url]);
  return stats;
}