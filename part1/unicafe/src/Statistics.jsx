import { useState } from "react";

import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = good / total;
  const percentage = average * 100;
  if (total > 0) {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text="good" number={good} />
        <StatisticLine text="neutral" number={neutral} />
        <StatisticLine text="bad" number={bad} />
        <StatisticLine text="all" number={total} />
        <StatisticLine text="average" number={average} />
        <StatisticLine text="percentage" number={percentage} /> %
      </>
    );
  }
  else{
    return (<div>No feedback given</div>)
  }
};
export default Statistics;
