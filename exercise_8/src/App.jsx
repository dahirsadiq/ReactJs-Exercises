import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [startTime , setStartTime]=useState();
   const [remainingTime , setRemainingTime ]=useState();
  const [isRunning , setIsRunning]= useState(false);
  // handle input function
   const handleInputChange=(e)=>{
    const value= Number(e.target.value);
    setRemainingTime(value);
    setStartTime(value);
    setIsRunning(false);

  }
  // handle start function
   const handleStart=()=>{
    setIsRunning(true);

  }
// handle stop function
  const handleStop=()=>{
    setIsRunning(false);

  }
  // handle Reset function
  const handleReset=()=>{
    setIsRunning(false);
    setRemainingTime(startTime);
    // setStartTime(startTime);
  }

  useEffect(()=>{
    let timerId;


  if(isRunning && remainingTime > 0){
     timerId= setInterval(() => {
      setRemainingTime((prev)=> prev - 1)
      
    }, 1000);
    return()=>clearInterval(timerId);

  }

   

  },[isRunning,remainingTime])
  
  
  return(
    <>
    <h1>Countdown Timer</h1>
    <label htmlFor="">Set Time Seconds:</label>
    <input type="number" value={startTime && remainingTime} onChange={handleInputChange} />
   <h2>Remaining Time {remainingTime} Seconds</h2>
   <button onClick={handleStart} disabled={isRunning | remainingTime===0}>Start</button>
   <button onClick={handleStop} disabled={!isRunning | remainingTime===0}>Stop</button>
   <button onClick={handleReset}>Reset</button>
   
    </>

  )

  
}

export default App
