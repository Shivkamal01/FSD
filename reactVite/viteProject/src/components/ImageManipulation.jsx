import React from 'react'
import { useState } from 'react'

function ImageManipulation() {
    const[catheight, setcatheight]=useState(200);
    const[catwidth, setcatwidth]=useState(200);
    const[red, setRed]=useState(0);
    const[green, setGreen]=useState(0);
    const[blue, setBlue]=useState(0);
    function increHeight(){
        setcatheight(catheight+15);
    }
    function increWidth(){
        setcatwidth(catwidth+15);
    }
    function redColor(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }
    function greenColor(){
        setRed(0);
        setGreen(180);
        setBlue(0);
    }
    function blueColor(){
        setRed(0);
        setGreen(0);
        setBlue(255);
    }
  return (
    <div>
      <h2>ImageManipulation</h2>
      <div style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`, border: '4px solid red', height:'400px', width:'400px', marginLeft:'300px'}}>
        <img src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png" alt=""  height={catheight} width={catwidth}  />
      </div>
      <div>
        <button onClick={increHeight}>IncreseHeight</button>
        <button onClick={increWidth}>IncreseWidth</button>
      </div>
      <div>
        <button onClick={redColor}>ChangeRed</button>
        <button onClick={greenColor}>ChangeGreen</button>
        <button onClick={blueColor}>ChangeBlue</button>
      </div>
    </div>
  )
}

export default ImageManipulation
