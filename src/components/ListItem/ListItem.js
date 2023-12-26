import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Name, Number, DeleteBtn, Icon } from './ListItem.styled';

export const ListItem = () => {
  const { id, name, number } = useSelector(state => state.contactsState);
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Name>{name} :</Name>
      <Number>{number}</Number>

      <DeleteBtn onClick={handleDeleteContact} aria-label="delete">
        <Icon size="19px" />
      </DeleteBtn>
    </Item>
  );
};
