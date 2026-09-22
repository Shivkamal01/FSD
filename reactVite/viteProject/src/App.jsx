import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'

function App() {
  

  return (
    <>
     <div style={{border:'2px solid red', width:'300px', height:'100%'}}>
      <h2>Abes Engineering College</h2>
      {/* <ICardGallery></ICardGallery> */}
      {/* <MyState></MyState> */}
      <ColorChange></ColorChange>
      
      </div>
    </>
  )
}

export default App
