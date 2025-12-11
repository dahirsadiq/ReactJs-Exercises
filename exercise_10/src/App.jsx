import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './UsersList'

function App() {
  
  // const [usersList , setUsersList]= useState([]);
  const users=[
    { id:1 , name:"Ali Hamud",email:"alihamud2000@gmail.com"},
    {id:2 , name:"Ahmed Mohamed Farah", email:"ahmedsaadiq@gmail.com"},
    {id:3 , name:"Abdullahi Abdirahman Mohamed", email:"abdallaam1995@gmail.com"},
    {id:4 , name:"Hamdi Ali Kediye", email:"hamdikediye@gmail.com"},
  ]
  console.log(users)

  return (
    <>
    <UsersList users={users}/>
   
     
    </>
  )
}

export default App
