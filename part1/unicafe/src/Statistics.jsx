import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = good / total;
    const percentage = average * 100;
  return (
    <>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>percentage {percentage} %</div>
    </>
  );
};
export default Statistics;
