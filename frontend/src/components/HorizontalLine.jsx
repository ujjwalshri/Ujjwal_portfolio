import React, { useEffect } from 'react'

const HorizontalLine = () => {
  // write a code for useEffect
  useEffect(() => {
    console.log('Component is mounted')
    return () => {
      console.log('Component is unmounted')
    }
  } 
  , [])
  

  return (
    <div className='h-1 w-2/3 bg-base'></div>

  )
}


export default HorizontalLine