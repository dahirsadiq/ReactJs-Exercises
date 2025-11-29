import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOn, setIsOn]=useState(true);
  
  const handleToggle=()=>{
    setIsOn(!isOn);
  }
 

  return (
    <>
     <p>the button is  {isOn ?'ON':'OFF'}</p>
    
     <button onClick={handleToggle}>Turn {isOn ?'OFF':'ON'}</button>
    </>
  )
}

export default App
