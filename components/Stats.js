import useStats from '../utils/useStats';

export default function Stats({ url }) {
  console.log('new url in stats comp', url);
  const stats = useStats(url);
  if (!stats) return <p>loading worldwide data</p>;


  console.log(stats);

  return (
    <div>
      <div className="statBlock">
        <h3>confirmed cases:</h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="statBlock">
        <h3>deaths:</h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="statBlock">
        <h3>recoveries:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </div>
  )
}