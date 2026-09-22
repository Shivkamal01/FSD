import React from 'react'
import { useState } from 'react'

function ColorChange() {
    function redColor(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }
    function greenColor(){
        setRed(0);
        setGreen(200);
        setBlue(0);
    }
    function blueColor(){
        setRed(0);
        setGreen(0);
        setBlue(240);
    }
    
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
  return (
    <div>
      <div style={{backgroundColor:`rgb(${red},${green},${blue})`, height:'100px', width:'100%'}}>
        hey
      </div>
      <button onClick={redColor}>RED</button>
      <button onClick={greenColor}>GREEN</button>
      <button onClick={blueColor}>BLUE</button>
    </div>
  )
}

export default ColorChange
