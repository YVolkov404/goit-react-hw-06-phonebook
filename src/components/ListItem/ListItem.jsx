import { Item, Name, Number, DeleteBtn, Icon } from './ListItem.styled';

export const ListItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      <Name>{name} :</Name>
      <Number>{number}</Number>

      <DeleteBtn onClick={() => deleteContact(id)} aria-label="delete">
        <Icon size="19px" />
      </DeleteBtn>
    </Item>
  );
};
