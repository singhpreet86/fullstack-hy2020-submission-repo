import React, { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>  {props.text} </button>
    )
}

const Statistics = (props) => {
        return (
            <div>
                <table>
                    <tbody>
                        <tr><StatisticLine text="good" value = {props.count.good}/></tr>
                        <tr><StatisticLine text="neutral" value = {props.count.neutral}/></tr>
                        <tr><StatisticLine text="bad" value = {props.count.bad}/></tr>
                        <tr><StatisticLine text="all" value = {props.count.all}/></tr>
                        <tr><StatisticLine text="average" value = {props.count.average}/></tr>
                        <tr><StatisticLine text="positive" value = {props.count.positive}/></tr>
                    </tbody>
                 </table>
            </div>
        )
}

const StatisticLine = (props) => {
    return (
        <>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </>
    )
}


const App = () => {

  const [count, setCount] = useState({
      good:0,
      neutral:0,
      bad:0,
      all:0,
      average:0,
      positive:0
  })


  const increaseGood = () => {
      setCount({
          ...count,
          good: count.good + 1,
          all: all(),
          average: average(),
          positive: positive()
      })
  }
  const increaseNeutral = () => {
      setCount({
          ...count,
          neutral: count.neutral + 1,
          all: all(),
          average: average(),
          positive: positive()
      })
  }
  const increaseBad = () => {
      setCount({
          ...count,
          bad: count.bad + 1,
          all: all(),
          average: average(),
          positive: positive()
      })
  }

  const all = () => {
      return  count.bad + count.neutral + count.good
  }

  const checkNan = (res) => {
      if (isNaN(res)) {
          return 0
      }
      else{
          return res
      }
  }

  const average = () => {
      const res = (((count.good - count.bad)/(count.bad + count.neutral + count.good)) *  100)/100
      return checkNan(res)
  }

  const positive = () => {
      const res = ((count.good/(count.bad + count.neutral + count.good)) * 100 )
      return checkNan(res) + " %"
  }

    return (
      <>
        <h3>give feedback</h3>
        <Button handleClick={increaseGood} text="good" />
        <Button handleClick={increaseNeutral} text="neutral" />
        <Button handleClick={increaseBad} text="bad" />
        <h3>statistics</h3>
          { all() > 0 ?
              <Statistics count={count}/>
          : null }
      </>
  )
}

export default App