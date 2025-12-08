import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[cords,setCords]=useState({x:0,y:0});
 

  useEffect(()=>{

    const hadleMouseMove=(e)=>{
      setCords({x:e.clientX,y:e.clientY});

      
    }
    window.addEventListener("mousemove",hadleMouseMove);
    return()=>{
      window.removeEventListener("mousemove",hadleMouseMove);
    }
    
  },[])

  return (
    <div>
      <h3>Mouse X:{cords.x}</h3>
      <h3>Mouse Y:{cords.y}</h3>
    </div>

  )
      
}

export default App
