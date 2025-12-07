import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name,setName]=useState("");
   const [greeting,setGreeting]=useState("Hello")
  useEffect(()=>{
    if(!name){
      document.title="Welcome"
    }
    else{
      document.title=`${name}, ${greeting}`
    }
    

  },[name,greeting])
 
  

  return (
    <div>
        <h2>Enter Your Name:</h2>
        <input type="text"value={name} onChange={(e)=>setName(e.target.value)} />
        <h2>Enter Your Greetings:</h2>
      
        <input type="text" value={greeting} onChange={(e)=>setGreeting(e.target.value)}/>


    </div>
  
  )
}

export default App
