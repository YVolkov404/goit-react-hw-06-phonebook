import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';

//-----------------------------------------------------------------------------

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

//-----------------------------------------------------------------------------

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contact-list',
  storage,
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
