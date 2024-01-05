import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, contactsState } from 'rdx/contactsSlice';
import { Item, Name, Number, DeleteBtn, Icon } from './ListItem.styled';

export const ListItem = () => {
  const contacts = useSelector(contactsState);

  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContacts(contacts.id));

  // console.log(handleDeleteContact);

  return (
    <Item>
      <Name>{contacts.name} :</Name>
      <Number>{contacts.number}</Number>

      <DeleteBtn onClick={handleDeleteContact} aria-label="delete">
        <Icon size="19px" />
      </DeleteBtn>
    </Item>
  );
};
