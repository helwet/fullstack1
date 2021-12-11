import React, { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [goodClicks, setGoodClicks] = useState(0);
  const [neutralClicks, setNeutralClicks] = useState(0);
  const [badClicks, setBadClicks] = useState(0);

  const [total, setTotal] = useState(0);
  const [avg , setAvg] = useState(0);
  const [positive , setPositive] = useState(0);

  const updateOtherValues = () => {
    setTotal( goodClicks + badClicks + neutralClicks);
    console.log("totals:" + total + " all:" + total);
    setAvg((goodClicks + -badClicks) / total);
    setPositive(goodClicks / total);
    console.log(positive);
  };
  const Buttons = () => {
    return (
      <div>
        <h1>Give feedback :</h1>
        <button
          onClick={() => {
            setGoodClicks(goodClicks + 1);
            updateOtherValues();
            setGood(goodClicks);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setNeutralClicks( neutralClicks + 1);
            console.log("neutral = " + neutralClicks);
            updateOtherValues();
            setNeutral(neutralClicks);
          }}
        >
          neutral
        </button>
        <button
          onClick={() => {
            setBadClicks(badClicks + 1);
            updateOtherValues();
            setBad(-badClicks);
          }}
        >
          -1
        </button>
      </div>
    );
  };

  const Statistics = (props) => {
    //console.log(props.allClicks);
    if (total > 0) {
      return (
        <>
          <h1> Statistics: </h1>
  
          <StatisticLine text="good" value={good} {...props} />
          <StatisticLine text="neutral" value={neutral} {...props} />
          <StatisticLine text="bad" value={bad} {...props} />
          <StatisticLine text="total reviews" value={total} {...props} />
          <StatisticLine text="average" value={avg} {...props} />
          <StatisticLine text=" % of positive" value={positive}
          />
        </>
      );
    } else
      return (
        <div>
          <h1> Statistics: </h1>
          no statistics yet
        </div>
      );
  };
  
  const StatisticLine = (props) => {
   // const nameofline = useState(props.text);
    return (
      <div>
        {props.text} : <b>{props.value}</b>
      </div>
    );
  };



  return (
    <div>
      <Buttons     />
      <Statistics />
    </div>
  );
};


export default App;
