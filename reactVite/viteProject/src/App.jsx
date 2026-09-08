import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {
  

  return (
    <>
     <div style={{border:'2px solid red', width:'300px', height:'300px'}}>
      <ICard></ICard>
      <h2>Abes Engineering College</h2>
      {/* 
      <img src="https://img.magnific.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg?semt=ais_hybrid&w=740&q=80" alt="" height={100} width={100}/>
      <table>
        <tr>
          <th>Roll no.</th>
          <td>2400210</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Shiv Kamal</td>
        </tr>
        <tr>
          <th>Branch</th>
          <td>CSE</td>
        </tr>
        <tr>
          <th>Section</th>
          <td>24</td>
        </tr>
      </table> */}
      
      </div>
    </>
  )
}

export default App
