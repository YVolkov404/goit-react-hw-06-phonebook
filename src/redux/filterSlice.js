import { createSlice } from '@reduxjs/toolkit';
import { contactsState } from './contactsSlice';

const filterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filteredContacts: {
      setFilteredName(contactName) {
        return {
          payload: {
            value: contactName,
          },
        };
      },
      getFilteredContacts(state, action) {
        state.filter = contactsState.filter(() => {
          return action.payload.contactName
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      },
    },
  },
});

export const { setFilteredName, getFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
