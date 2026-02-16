import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageContext from './LanguageContext '
import Greeting from './Greeting'

function App() {
  const [language , setLanguage]=useState('en')
   const handleSwitchLanguge=()=>{
        setLanguage((prevLanguage)=> (prevLanguage === 'en' ? 'es' : 'en'))

    }


  return (
  
      <LanguageContext.Provider value={language} >
         <button onClick={handleSwitchLanguge}>Switch to {language === 'en' ? 'Spanish' : 'English'}</button>
          <Greeting />
          </LanguageContext.Provider>

    

  
  )
}

export default App
