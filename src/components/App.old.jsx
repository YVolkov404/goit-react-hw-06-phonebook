import { uid } from 'uid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, Title, SubTitle } from './App.styled';

const localStorageKey = 'contact-list';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(localStorageKey);

    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    }
  }

  formSubmitHandler = data => {
    const hasContactName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (hasContactName) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(state => {
        return {
          contacts: [...state.contacts, { id: uid(3), ...data }],
        };
      });
    }
  };

  filterChangeHandler = contactName => {
    this.setState({ filter: contactName });
  };

  deleteContactName = contactNumber => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== contactNumber
        ),
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contactName => {
      const hasContactName = contactName.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContactName;
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContactName = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <SubTitle>Contacts</SubTitle>

        <Filter filter={filter} onChangeFilter={this.filterChangeHandler} />

        {contacts.length > 0 && (
          <ContactList
            contacts={filteredContactName}
            deleteContact={this.deleteContactName}
          />
        )}
      </Container>
    );
  }
}
