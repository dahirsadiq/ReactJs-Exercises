import { useState } from "react";


const UseForm=(initialValues)=>{
    // console.log(initialValues);
    

    const [values , setValues]=useState(initialValues);
    
    const handleChange=(e)=>{

        const {name , value}=e.target;
        setValues({...values , [name]:value})

    }
 return { values, handleChange };


}
export default UseForm;