import React from 'react'

const Counter = ({ value, setValue, step = 1 }) => {
  return (
    <div className="counter">
      <button onClick={() => { setValue(value - step) }}>-</button>
      <span>{value}</span>
      <button onClick={() => { setValue(value + step) }}>+</button>
    </div>
  )
}

export default Counter;
