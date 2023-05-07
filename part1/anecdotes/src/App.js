import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const n = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(n)
  const [highestValueIndex, setHighestValueIndex] = useState(0)


  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleClick ()  {
    setSelected(randomNumberInRange(0, anecdotes.length-1))
    highestVote();
  }

  function handleClickVote ()  {
    const newArray = [...votes];
    newArray[selected] = newArray[selected] + 1;
    setVotes(newArray);
    highestVote();
  }

  function highestVote() {
    const myArray = votes;
    const highestValueIndex = myArray.reduce((acc, curr, index) => {
      return curr >= myArray[acc] ? index : acc;
    }, 0);
    if (myArray[highestValueIndex] == 0) {
      setHighestValueIndex(0);
    }
    else {
      setHighestValueIndex(highestValueIndex);
    }
  }

  return (
      <div>
        <p> {anecdotes[selected]} </p>
        <p> has {votes[selected]} votes</p>
        <button onClick={handleClick}>next anecdote</button>
        <button onClick={handleClickVote}>vote</button>
        <h3> Anecdote with most votes </h3>
        { anecdotes[highestValueIndex] }
        <p> has {votes[highestValueIndex]} votes</p>
      </div>
  )
}

export default App