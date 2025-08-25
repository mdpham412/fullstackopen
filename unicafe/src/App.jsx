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


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good+1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral+1)
  }
  const incrementBad = () => {
    setBad(bad+1)
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
    </div>
  )
}

export default App
