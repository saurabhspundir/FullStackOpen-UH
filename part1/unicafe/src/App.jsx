import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [metric, setMetrics] = useState({total:0,average:0,percentage:0});

  const handleClick = (reviewType) => {
    return () => {
      switch (reviewType) {
        case "good":
          handleClickGood();
          break;
        case "neutral":
          handleClickNeutral();
          break;
        case "bad":
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
    const newMetric=handleMetrics(newGood,neutral,bad)
    setMetrics(newMetric)
  };
  const handleClickNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    const newMetric=handleMetrics(good,newNeutral,bad)
    setMetrics(newMetric)
  };
  const handleClickBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    const newMetric=handleMetrics(good,neutral,newBad)
    setMetrics(newMetric)
  };
  const handleMetrics = (iGood=0,iNeutral=0,iBad=0) => {
    console.log(iGood,iNeutral,iBad)
    const total =  iGood+iNeutral+iBad
    const average =   iGood/total
    const percentage = average*100
    const newMetric ={total:total,average:average,percentage:percentage}
    console.log(newMetric)
    return newMetric
  };
  
  
  return (
    <>
      <h1> give feedback</h1>
      <br />
      <div>
        <Button onClick={handleClick("good")} text="good" />
        <Button onClick={handleClick("neutral")} text="neutral" />
        <Button onClick={handleClick("bad")} text="bad" />
      </div>
      <br />
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {metric.total}</div>
      <div>average {metric.average}</div>
      <div>percentage {metric.percentage} %</div>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
export default App;
