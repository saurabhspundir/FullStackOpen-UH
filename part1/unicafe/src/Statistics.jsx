import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const percentage = `${(good / total) * 100} %`;
  if (total > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <h1>statistics</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <StatisticLine text='good' number={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text='neutral' number={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text='bad' number={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text='all' number={total} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text='average' number={average} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text='percentage' number={percentage} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return <div>No feedback given</div>;
  }
};
export default Statistics;
