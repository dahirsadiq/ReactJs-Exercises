import { useReducer} from "react";





const initialState={
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    phone:''
}
const reducer=(state , action)=>{
    switch(action.type){

        case 'ADD_FIELD':
            return{
                ...state , [action.field]:action.value
            }

        case 'NEXT':
            return{
                ...state ,step: state.step + 1
            }
         case 'PREV':
            return{
                ...state ,step: state.step - 1
            }
         case 'RESET':
            return initialState;
        

        default: return state;



    }

}






const Multi_Step_Registration=()=>{


  const [state , dispatch]=useReducer( reducer, initialState);

  const handleAddField=(e)=>{
    dispatch({
        type:'ADD_FIELD',
        field:e.target.name,
        value: e.target.value
    });
   
  }
//   handle Next Function
const handleNext=()=>{
    dispatch({
        type:'NEXT'
    })
}

//   handle Prev Function
const handlePrev=()=>{
    dispatch({
        type:'PREV'
    })
}

//   handle RESET Function
const handleReset=()=>{
    dispatch({
        type:'RESET'
    })
}
    return(
        <div>
             <h2>Multi-Step Registration</h2>
            { state.step ===1 &&(
                <div>
                
            <h2>Step 1: Profile </h2> 
            <label htmlFor="firstname">First Name:</label>
                <input type="text" required placeholder="enter first name : " name= "firstName" value={state.firstName} onChange={handleAddField}/> <br></br>
                <label htmlFor="lastName">Last Name : </label>
                <input type="text"  required placeholder="Enter Last Name : " name= "lastName" value={state.lastName}  onChange={handleAddField}  /> <br></br>
                 <button onClick={handleNext}>Next</button>
                 </div>
            
           ) }

                 { state.step===2  &&(
                 <div>
                    
            <h2>Step 2: Contact Form </h2> 
                <label htmlFor="email">Email:</label> 
                <input type="email" placeholder="Enter Your Email:"name="email" value={state.email}  onChange={handleAddField} /><br></br>
                <label htmlFor="phone">Phone:</label>
                <input type="number"  placeholder="Enter Your Phone:" name="phone" value={state.phone}  onChange={handleAddField}  /> <br></br>
                 <button onClick={handlePrev}>Prev</button>
                 <button onClick={handleNext}>Next</button>
                  
                 </div>)
          }

          {
            state.step===3  &&(
                <div>
                    
            <h2>Step 3: Review and Submit </h2> 
                    <p> First Name : <strong>{state.firstName}</strong> </p>
                     <p>Last Name : <strong>{state.lastName}</strong></p> <br></br>
                      <p> Email : <strong>{state.email}</strong></p> <br></br>
                       <p> Phone : <strong>{state.phone}</strong></p> <br></br>
                    <button onClick={handlePrev}>Prev</button>
                  <button onClick={handleReset}>Submit</button>
                      
                    
                     </div>
            )
          }
 

</div>
    )
    
}

export default Multi_Step_Registration;