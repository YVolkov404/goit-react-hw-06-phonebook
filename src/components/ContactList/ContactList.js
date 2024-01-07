import { useDispatch, useSelector } from 'react-redux';
import { contactsState, deleteContacts } from 'rdx/contactsSlice';
import { filterState } from 'rdx/filterSlice';

//---------------------------------------------------------------

import {
  List,
  ListItem,
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
    <List>
      {searchResponse.length > 0 &&
        searchResponse.map(response => {
          return (
            <ListItem key={response.id}>
              <Item>
                <Name>{response.name} :</Name>
                <Number>{response.number}</Number>
                <DeleteBtn
                  onClick={() => dispatch(deleteContacts(response.id))}
                >
                  <Icon size="19px" />
                </DeleteBtn>
              </Item>
            </ListItem>
          );
        })}
    </List>
  );
};
