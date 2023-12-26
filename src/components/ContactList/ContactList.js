import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import { List } from './ContactList.styled';
import { contactsState } from 'redux/contactsSlice';

export const ContactList = () => {
  const { id, name, number } = useSelector(state => state.contactsState);

  return (
    <List>
      {contactsState.map(index => {
        return <ListItem key={index} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
