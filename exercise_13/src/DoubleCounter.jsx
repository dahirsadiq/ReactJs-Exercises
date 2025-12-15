

import { useReducer } from "react";


    const initialState={counterA:0 ,counterB:0};
    const reducer=(state , action)=>{
        switch(action.type){
            case 'incrementA':
                return{ ...state , counterA:state.counterA + 1}
            case 'decrementA':
                return{...state , counterA:state.counterA - 1}
            case 'incrementB':return{...state , counterB:state.counterB + 1}
            case 'decrementB':return{...state , counterB:state.counterB - 1}
            case 'reset':return initialState;
            default:return state;
        }
     

    }
    
const DoubleCounter=()=>{
    const [state , dispatch]= useReducer(reducer , initialState);


 return(
    <>
    <h1>Double Counter</h1>
     <h2>Counter A  : {state.counterA}</h2>
         <button onClick={()=>dispatch({type:'incrementA'})}>Increment A</button>
         <button disabled={state.counterA===0} onClick={()=>dispatch({type:'decrementA'})}>Decrement A</button>
         <h2>Counter B : {state.counterB} </h2>
         <button onClick={()=>dispatch({type:'incrementB'})}>Increment B</button>
         <button disabled={state.counterB===0} onClick={()=>dispatch({type:'decrementB'})}>Decrement B</button><br></br>
          <button onClick={()=>dispatch({type:'reset'})}>Reset All</button>

    </>
 )

}

export default DoubleCounter;