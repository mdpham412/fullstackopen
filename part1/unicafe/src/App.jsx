import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.name}
  </button>
  )
}

const StatisticLine = ({name, value}) => {
  if(name != "positive") {
    return (
      <>
        <tr>
          <th>{name}</th> 
          <td>{value}</td>
        </tr>
      </>
    )
  } else {
    return (
      <>
        <tr>
          <th>{name}</th> 
          <td>{value*100}%</td>
        </tr>
      </>
    )
  }

}
const Statistics = ({ good, neutral, bad, all, avg, pos }) => {
  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <table>
        <StatisticLine name="good" value={good}/>
        <StatisticLine name="neutral" value={neutral}/>
        <StatisticLine name="bad" value={bad}/>
        <StatisticLine name="all" value={all}/>
        <StatisticLine name="average" value={avg}/>
        <StatisticLine name="positive" value={pos}/>
      </table>
      
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)

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
      <Statistics good={good} neutral={neutral} bad={bad}
            all={all} avg={total/all} pos={good/all} />

    </div>
  )
}

export default App
