

import ContactContext from "./ContactContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { initialState , Reducer } from "./Reducer";
import { useReducer } from "react";


const ContactApp=()=>{
    const [state , dispatch]=useReducer(Reducer , initialState);

    return(
        <ContactContext.Provider value={{state , dispatch}}>

            <ContactForm />
            <ContactList />

        </ContactContext.Provider>
    )
}

export default ContactApp;