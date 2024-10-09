'use client'
import React from 'react'

const error = (error) => {
  console.log(error.error)

  return (
    <div>
      <h1>{error.error.message}</h1>
    </div>
  )
}

export default error
