import { AddContact } from './AddContact/AddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { Wrapper } from './App.styled';
import { StyledDiv } from './AddContact/AddContact.styled';

export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <StyledDiv>
        <FilterContacts />
        <ContactsList />
      </StyledDiv>
    </Wrapper>
  );
};
