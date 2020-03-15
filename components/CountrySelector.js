import { useState } from "react";
import Stats from '../components/Stats';
import useCountries from '../utils/useCountries';

export default function CountrySelector() {
  const [codeSelected, setCodeSelected] = useState('USA');

  const countriesData = useCountries('https://covid19.mathdro.id/api/countries');
  if (!countriesData) return <p>loading countries</p>;

  const countryOptions = Object.entries(countriesData.countries).map(([country, code]) => {
    // console.log(code);
    return <option selected={codeSelected === countriesData.iso3[code]} value={countriesData.iso3[code]} key={code}>{country}</option>
  });
  let url = `https://covid19.mathdro.id/api/countries/${codeSelected}`;

  return (
    <div>
      <select onChange={(e) => setCodeSelected(e.target.value)} value={countriesData.iso3[codeSelected]}>
        {countryOptions}
      </select>
      <h3>currently showing data for {codeSelected}</h3>
      <Stats url={url}></Stats>
    </div>
  )
}