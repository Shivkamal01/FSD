import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'

function App() {
  

  return (
    <>
     <div style={{border:'2px solid red', width:'300px', height:'100%'}}>
      <h2>Abes Engineering College</h2>
      <ICardGallery></ICardGallery>
      
      </div>
    </>
  )
}

export default App
