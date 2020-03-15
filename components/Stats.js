import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #689a7a;
  font-size: 2rem;
  text-align: center;
  border: 1px solid #487a5a;
  border-radius: 2%;
`;

export default function Stats({ url }) {
  console.log('new url in stats comp', url);
  const { stats, loading, error } = useStats(url);
  if (!stats) return <p>loading data</p>;


  console.log(stats);
  if (error) return <div><p>{error}</p></div>;

  return (
    <StatGrid>
      <StatBlock className="statBlock">
        <h3>confirmed cases:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock className="statBlock">
        <h3>deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock className="statBlock">
        <h3>recoveries:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  )
}