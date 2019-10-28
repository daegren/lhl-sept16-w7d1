import React from 'react'
import './Counter.css'

const Counter = ({ value, setValue, step = 1 }) => {
  const handleChange = delta => () => {
    setValue(value + delta)
  }

  return (
    <div className="counter">
      <button onClick={handleChange(-1 * step)}>-</button>
      <span>{value}</span>
      <button onClick={handleChange(step)}>+</button>
    </div>
  )
}

export default Counter;
