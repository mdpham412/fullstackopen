import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.name}
  </button>
  )
}

const Display = (props) => {
  return (
    <>
      <p>{props.name} {props.value}</p>
    </>
  )
}

const DisplayPercentage = (props) => {
  return (
    <>
      <p>{props.name} {props.value * 100}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAvg] = useState(0)

  const incrementGood = () => {
    setGood(good+1)
    incrementAll()
    incrementTotal()
  }
  const incrementNeutral = () => {
    setNeutral(neutral+1)
    incrementAll()
  }
  const incrementBad = () => {
    setBad(bad+1)
    incrementAll()
    decrementTotal()
  }
  const incrementAll = () => {
    setAll(all+1)
  }
  const incrementTotal = () => {
    setTotal(total+1)
  }
  const decrementTotal = () => {
    setTotal(total-1)
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button name="good" handleClick={incrementGood}/>
      <Button name="neutral" handleClick={incrementNeutral}/>
      <Button name="bad" handleClick={incrementBad}/>

      <h2>statistics</h2>
      <Display name="good" value={good}/>
      <Display name="neutral" value={neutral}/>
      <Display name="bad" value={bad}/>
      <Display name="all" value={all}/>
      <Display name="average" value={total/all}/>
      <DisplayPercentage name="positive" value={good/all}/>
    </div>
  )
}

export default App
