'use client'
import React from 'react'

const Client = () => {
  const [counter, setCounter] = React.useState(0)
  return (
    <div>
      <h1 className='text-4xl font-bold mb-4'>{counter}</h1>
      <div className='flex space-x-4'>
        <button
          className='btn btn-primary'
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <button className='btn btn-primary' onClick={() => setCounter(0)}>
          Reset
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Client
