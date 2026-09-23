import React from 'react'
import { useState } from 'react';

function College() {
    function user(){
        setName("Shiv Kamal");
        
    }
    function Clg(){
        setCollege("Abes Engineering College");
    }
    

    const[name , setName]= useState("Sk"); // state variable bna rhe hai
    const[college, setCollege]= useState("abes");
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>College: {college}</h2>
      <button onClick={user}>UpdateName</button>
      <button onClick={Clg}>UpdateCollege</button>

    </div>
  )
}

export default College
