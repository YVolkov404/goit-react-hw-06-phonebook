import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContacts: {
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: uid(3),
          },
        };
      },
      reducer(state, action) {
        state.contacts = action.payload;
      },
    },
    deleteContacts: {
      reducer(state, action) {
        return state.contacts.filter(contact => contact.id === action.payload);
      },
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const contactsState = state => state.contacts;
