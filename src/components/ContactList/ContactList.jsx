import { ListItem } from '../ListItem/ListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <ListItem
            key={index}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
};
