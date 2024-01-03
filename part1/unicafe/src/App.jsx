import { useState } from 'react';

import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (reviewType) => {
    return () => {
      switch (reviewType) {
        case 'good':
          handleClickGood();
          break;
        case 'neutral':
          handleClickNeutral();
          break;
        case 'bad':
          handleClickBad();
          break;
        default:
          break;
      }
    };
  };

  const handleClickGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };
  const handleClickNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };
  const handleClickBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  return (
    <>
      <h1> give feedback</h1>
      <br />
      <div>
        <Button onClick={handleClick('good')} text='good' />
        <Button onClick={handleClick('neutral')} text='neutral' />
        <Button onClick={handleClick('bad')} text='bad' />
      </div>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
