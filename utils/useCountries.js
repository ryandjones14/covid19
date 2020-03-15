import { useState, useEffect } from "react";

export default function useCountries(url) {
  const [countries, setCountries] = useState();

  useEffect(() => {
    async function fetchData() {
      console.log('fetching countries');
      const data = await fetch(url).then(response =>
        response.json()
      );
      setCountries(data);
    };
    fetchData();
  }, []);
  return countries;
}