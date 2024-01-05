import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
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
      reducer(contacts, action) {
        contacts.push(action.payload);
      },
    },
    deleteContacts: {
      reducer(contacts, action) {
        return contacts.filter(contact => contact.id === action.payload);
      },
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const contactsState = state => state.contacts;
