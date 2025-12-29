

import UseForm from "./UseForm";
const ContactForm=()=>{
     const { values, handleChange } = UseForm({
    name: '',
    email: '',
    
  });

    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log('Form Data:', values);

    }


    return(
        <>
        
        <h2>Custom Hook</h2>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Enter Your Name"  name="name" value={values.name} onChange={handleChange} />
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="enter your email" name="email" value={values.email} onChange={handleChange}/>
        <br></br>
        <button type="submit">Submit</button>
        </form>

        </>
    )


}

export default ContactForm;