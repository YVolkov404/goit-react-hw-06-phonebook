import { Search, Label, Input } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Search>
      <Label htmlFor="filterId">Find contacts by name</Label>
      <Input
        id="filterId"
        type="text"
        name="name"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
        autoComplete="off"
      />
    </Search>
  );
};
