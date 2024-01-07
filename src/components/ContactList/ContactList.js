import { useDispatch, useSelector } from 'react-redux';
import { contactsState, deleteContacts } from 'rdx/contactsSlice';
import { filterState } from 'rdx/filterSlice';
//---------------------------------------------------------------
import {
  List,
  Name,
  Number,
  DeleteBtn,
  Icon,
  Item,
} from './ContactList.styled';
//----------------------------------------------------------------
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsState);
  const filter = useSelector(filterState);

  const searchResponse = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    searchResponse.length > 0 && (
      <List>
        {searchResponse.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Name>{name} :</Name>
              <Number>{number}</Number>
              <DeleteBtn onClick={() => dispatch(deleteContacts(id))}>
                <Icon size="19px" />
              </DeleteBtn>
            </Item>
          );
        })}
      </List>
    )
  );
};
