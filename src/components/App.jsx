import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './App.styled';
import { useSelector } from 'react-redux';

// --------------------------------------------------------------------

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
