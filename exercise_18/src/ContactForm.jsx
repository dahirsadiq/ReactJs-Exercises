import { useState , useEffect } from "react";
import { useContext } from "react";
import ContactContext from "./ContactContext";

const ContactForm=()=>{
    const {dispatch, editingContact , setEditingContact}=useContext(ContactContext);
    

    const [contact , setContact]=useState(editingContact || { name:"", email:"", phone:""});
    const [isEditing , setIsEditing]=useState(false);
    useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);
    const handleChange=(e)=>{
        e.preventDefault();
        const {name ,value}= e.target;
        setContact({...contact ,[name]:value});
       
       
       

    }
const handleCancelEdit = () => {
    setContact({ name: '', email: '', phone: '' });
    setIsEditing(false);
  };

  

     const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: 'edit', payload: contact });
        setIsEditing(false);
      } else {
        dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }
      setContact({ name: '', email: '', phone: '' });
    }
  };



    return(
        <div>
            <h1>Contact form</h1>
           <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
             <input type="text" name="name" placeholder="Enter your Name : " value={contact.name} onChange={handleChange}/> <br></br>
             <label htmlFor="email">Email:</label>
             <input type="email" name="email" placeholder="Enter your Email:" value={contact.email}  onChange={handleChange}/> <br></br>
             <label htmlFor="phone">Phone:</label>
             <input type="number" name="phone" placeholder="enter your phone :" value={contact.phone} onChange={handleChange} />
             <button  type='submit'>{isEditing ?'Update':'Add'}</button>
              {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
           </form>
        </div>
    )
}

export default ContactForm;