import { useState, useEffect } from 'react';
import { uid } from 'uid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './App.styled';

// --------------------------------------------------------------------
const localStorageKey = 'contact-list';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(localStorageKey);
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  //---------------------------------------------------------------------

  const formSubmitHandler = data => {
    const hasContactName = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (hasContactName) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(contacts => [...contacts, { id: uid(3), ...data }]);
    }
  };

  //---------------------------------------------------------------------

  const filterChangeHandler = contactName => {
    setFilter(contactName);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contactName => {
      const hasContactName = contactName.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContactName;
    });
  };

  const filteredContactName = getFilteredContacts();

  //----------------------------------------------------------------------

  const deleteContactName = contactNumber => {
    setContacts(contacts.filter(contact => contact.id !== contactNumber));
  };

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm onSubmit={formSubmitHandler} />

      <SubTitle>Contacts</SubTitle>

      <Filter filter={filter} onChangeFilter={filterChangeHandler} />

      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContactName}
          deleteContact={deleteContactName}
        />
      )}
    </Container>
  );
};
