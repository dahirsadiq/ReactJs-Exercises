import { useState } from "react";


const LoginForm=()=>{
    const [userName , setUserName]= useState("");
    const [password , setPassword]= useState("");
    const [isLogin , setIsLogin]= useState(false);

    const handleLogin=(e)=>{
        e.preventDefault();
        if(userName && password){
            setIsLogin(true);
           
        }
       

    

    }
   const handleLogout=() =>{
        setUserName('');
        setPassword('');
        setIsLogin(false);
    }

    if(isLogin){
        return(
             <div>
            <h2>Welcome {userName}!</h2>
            <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
    
  

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin} >
                <label htmlFor="UserName">UserName:</label>
                <input type="text" placeholder="Enter UserName" required  onChange={(e)=>setUserName(e.target.value)}/> <br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" required onChange={(e)=>setPassword(e.target.value)}/> <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;