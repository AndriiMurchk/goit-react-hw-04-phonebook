
import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";


const ContactList = ({ filteredContacts, onDeleteBtnClick }) => {
     return (

      <ul>
        {filteredContacts.map(({ name, id, number }) => {
          return <ContactItem
            personName={name}
            personNumber={number}
            key={id}
            id={id}
            filteredContacts={filteredContacts}
            onDeleteBtnClick={onDeleteBtnClick} />
        })}
      </ul>
    );
  
}

ContactList.propTypes = {
  onDeleteBtnClick: PropTypes.func,
  filteredContacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export { ContactList };