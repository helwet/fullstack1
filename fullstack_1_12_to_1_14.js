import React, { useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
  ];
  const [votess, setVotes] = useState(new Uint8Array(anecdotes.length));
  const [selected, setSelected] = useState(0);
  const [mostVotesIndex, setMostVotesIndex] = useState(0);
  const [votesForCurrent, setVotesForCurrent] = useState(0);
  // const [maxIndex, setMaxIndex] = useState(0);
  function vote() {
    let currentVotes = votess[selected] + 1;
    console.log(currentVotes);
    votess[selected] = currentVotes;
    setVotes(votess);
    setVotesForCurrent(currentVotes);
    if (currentVotes > votess[mostVotesIndex]) {
      setMostVotesIndex(selected);
    }
    //selectMostPopular();
  }
  /*
  function selectMostPopular() {
    let max = 0;
    for (var i = 0; i < votes.length; i++) {
      if (max < votes[i]) {
        maxIndex = i;
      }
    }
    setMostVotesIndex(maxIndex);
  }
  */
  function selectRandom() {
    let rng = getRandomInt(0, votess.length);
    while (rng === selected) {
      rng = getRandomInt(0, votess.length);
    }
    setSelected(rng);
    setVotesForCurrent(votess[rng]);
  }

  return (
    <div>
      <h1>Anectode:</h1>
      {anecdotes[selected]}
      <h3>Give feedback :</h3>
      <button
        onClick={() => {
          vote();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          selectRandom();
        }}
      >
        random
      </button>
      <div>votes for this: {votesForCurrent}</div>
      <div>
        <h2>most popular :</h2> {anecdotes[mostVotesIndex]}
      </div>
    </div>
  );
};

export default App;
