import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import { List } from './ContactList.styled';
import { contactsState } from 'rdx/contactsSlice';
import { filterState } from 'rdx/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(contactsState);
  const filter = useSelector(filterState);

  console.log(contacts);

  const searchResponse = contacts.filter(contact => {
    const hasContactName = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    return hasContactName;
  });

  if (!searchResponse.length) return null;

  return (
    <List>
      {searchResponse.map(contact => {
        return (
          <ListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </List>
  );
};
