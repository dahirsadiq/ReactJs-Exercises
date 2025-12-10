import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [userName , setUsername]= useState("");
  const [users, setUsers]=useState([]);
  const [isloading , setIsLoading]=useState(false);
  

  useEffect(()=>{
    
    
  },[])

  const handleSearch= async ()=>{
   
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.github.com/users/${userName.toLowerCase()}`);
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);


        
      } catch (error) {
        console.log("error", error);
        
      }
    
   
  }
if(isloading){
  return <p>Loading.........</p>
}


  return(
    <>
   <h1>Github Users Search</h1>
 
     <input type="text" value={userName} onChange={(e)=> setUsername(e.target.value)} />
     <button type="submit" onClick={handleSearch}>Search</button>

     <h1>{users.name || users.login}</h1>
     <img src={users.avatar_url} alt="githuberuserimage"/>
     <p>Location:{ users.location ||"N/A"}</p>
     <p>public repos:{users.public_repos}</p>

  
   
    </>

  )

  
}

export default App
