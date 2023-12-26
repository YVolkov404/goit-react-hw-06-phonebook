import { useDispatch, useSelector } from 'react-redux';
import { Search, Label, Input } from './Filter.styled';
import { getFilteredContacts, setFilteredName } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filterState);
  const dispatch = useDispatch();

  const setContactName = e => dispatch(setFilteredName(e.target.value));

  return (
    <Search>
      <Label htmlFor="filterId">Find contacts by name</Label>
      <Input
        id="filterId"
        type="text"
        name="name"
        value={dispatch(getFilteredContacts(filter))}
        onChange={setContactName}
        autoComplete="off"
      />
    </Search>
  );
};
