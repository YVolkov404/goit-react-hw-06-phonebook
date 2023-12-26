import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './App.styled';
import { contactsState } from '../redux/contactsSlice';

// --------------------------------------------------------------------

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {contactsState.length > 0 && <ContactList />}
    </Container>
  );
};
