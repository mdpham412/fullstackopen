import { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const randomSelected = () => {
    setSelected(getRandomInt(8))
    console.log(selected)
  }
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const updateRatings = () => {
    const newRatings = [...ratings]
    newRatings[selected] += 1
    setRatings(newRatings)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {ratings[selected]} votes</p>
      <button onClick={updateRatings}>vote</button>
      <button onClick={randomSelected}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[ratings.indexOf(Math.max(...ratings))]}</p>
      <p>has {ratings[ratings.indexOf(Math.max(...ratings))]} votes</p>
    </div>
  )
}

export default App
