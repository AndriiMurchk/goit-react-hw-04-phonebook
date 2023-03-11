
import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledBtn} from "./Form.styled";

const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      number,
    };

    const isSuccess = addNewContact(newContact);

    if (isSuccess) {
      reset();
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

      return (

      <form onSubmit={handlerSubmitForm}>
        <label>
          <h2>Name of contact</h2>
          <input
            name="name"
            type="text"
            onChange={onChangeInput}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <h2>Number</h2>
          <input
            name="number"
            type="tel"
            value={number}
            onChange={onChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <StyledBtn type="submit">Add contact</StyledBtn>
      </form>
    )
  

}



ContactForm.propTypes = {
  addNewContact: PropTypes.func,
}

export { ContactForm };