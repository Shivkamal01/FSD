import React from 'react'
import { useState } from 'react'

function MyState() {
    const[counter, setCounter] =useState(10);
    function increment(){
        setCounter(counter+10);
    }
    function decrement(){
        setCounter(counter-5);
    }
  return (
    <div>
      MyState
      <h2>counter={counter}</h2>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      
    
    </div>
  )
}

export default MyState
