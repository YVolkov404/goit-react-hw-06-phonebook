import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery, filterState } from 'rdx/filterSlice';
//---------------------------------------------------------------------
import { Search, Label, Input } from './Filter.styled';
//---------------------------------------------------------------------
export const Filter = () => {
  const filter = useSelector(filterState);
  const dispatch = useDispatch();

  const onChangeHandler = e => dispatch(getSearchQuery(e.target.value));

  return (
    <Search>
      <Label htmlFor="filterId">Find contacts by name</Label>
      <Input
        id="filterId"
        type="text"
        value={filter}
        onChange={onChangeHandler}
      />
    </Search>
  );
};
