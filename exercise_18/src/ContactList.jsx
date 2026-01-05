import { useContext } from "react";
import ContactContext from "./ContactContext";

const ContactList = () => {
  const { state, dispatch } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact List</h2>

      {state.length === 0 && <p>No contacts</p>}

      {state.map(contact => (
        <div key={contact.id}>
          <p>
            <strong>{contact.name}</strong><br />
            {contact.email}<br />
            {contact.phone}
          </p>

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
