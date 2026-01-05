import { useContext } from "react";
import ContactContext from "./ContactContext";

const ContactList = () => {
  const { state, dispatch , setEditingContact  } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact List</h2>

      {state.length === 0 && <p>No contacts</p>}

      {state.map(contact => (
        <div key={contact.id}>
          <p>
            <strong>{contact.name}</strong>{contact.favorite && '★'}<br />
            {contact.email}<br />
            {contact.phone}
          </p>
          <button onClick={() => dispatch({ type: 'toggle', payload:contact.id })}>
          {contact.favorite ? 'Unfavorite' : 'Favorite'}
        </button>
              <button onClick={() => setEditingContact(contact)}>Edit</button>
          <button
            onClick={() =>
              dispatch({ type: "delete", payload: contact.id })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
