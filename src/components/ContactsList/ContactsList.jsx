import { useDispatch, useSelector } from 'react-redux';
import { Button, StyledUl } from './ContactsList.styled';
import { deleteContact } from 'redux/contacts/contacts.reducer';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contactsStore.contacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <StyledUl>
        {filteredContacts.length > 0
          ? filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <Button
                  type="button"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </Button>
              </li>
            ))
          : 'No contacts'}
      </StyledUl>
    </div>
  );
};
