import { useDispatch, useSelector } from 'react-redux';
import { Search, Label, Input } from './Filter.styled';
import { getSearchQuery, filterState } from 'rdx/filterSlice';

export const Filter = () => {
  const filter = useSelector(filterState);

  const dispatch = useDispatch();

  // const onChangeHandler = e => {
  //   dispatch(getSearchQuery(e.target.value));
  // };

  // console.log(onChangeHandler);

  return (
    <Search>
      <Label htmlFor="filterId">Find contacts by name</Label>
      <Input
        id="filterId"
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(getSearchQuery(e.target.value))}
      />
    </Search>
  );
};
