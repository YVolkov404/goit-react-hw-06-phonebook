import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';

export const contactsState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    contactsControl: {
      prepare() {
        return {
          payload: {
            iD: uid(3),
          },
        };
      },
      addContacts(state, action) {
        state.contactsState = [...state.contacts, action.payload.iD];
      },
      deleteContact(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.iD !== action.payload.iD
        );
      },
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
