import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'
import College from './components/College'
import ImageManipulation from './components/ImageManipulation'

function App() {
  

  return (
    <>
     <div style={{border:'2px solid red', width:'1000px', height:'800px'}}>
      {/* <h2>Abes Engineering College</h2> */}
      {/* <ICardGallery></ICardGallery> */}
      {/* <MyState></MyState> */}
      {/* <ColorChange></ColorChange> */}
      <ImageManipulation/>
      
      </div>
    </>
  )
}

export default App
