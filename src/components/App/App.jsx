import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactForm } from "../Form/Form";
import { Wrap } from "./App.styled";


const STORAGE_KEY = 'contacts';

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

     
  const addNewContact = (newContact) => {
    const { name } = newContact;
    const isExist = contacts.find((person) => person.name === name.trim());

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const finallyNewContact = {
      id: nanoid(),
      ...newContact,
    };

    setContacts([finallyNewContact, ...contacts]);

    return true;
  };




  const onChangeFilter = ({ target: { name, value } }) => {
    setFilter(value);
    };

  const onDeleteBtnClick = (id) => {
    setContacts((prevState) =>
    prevState.filter((person) => person.id !== id)
    );
    };


  const handlerFilterContacts = () => {
   
    const normalizeName = filter.toLowerCase().trim()

    return contacts.filter(person => person.name.toLowerCase().includes(normalizeName))
  };
 
    const filteredContacts = handlerFilterContacts();

    return (
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={addNewContact}
        />

        <h2>Contact List</h2>
        <Filter
          onChangeFilter={onChangeFilter}
          filter={filter}
        />

        <ContactList
          onDeleteBtnClick={onDeleteBtnClick}
          filteredContacts={filteredContacts}
        />

      </Wrap>
    )
  
};

export { App };

