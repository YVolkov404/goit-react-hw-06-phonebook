import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';

//-----------------------------------------------------------------------------

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import devToolsEnhancer from 'remote-redux-devtools';
// import Symbol_observable from 'symbol-observable';

// console.log(Symbol_observable);

//-----------------------------------------------------------------------------

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),

  // enhancers: getDefaultEnhancers =>
  //   getDefaultEnhancers({
  //     enhancers: devToolsEnhancer({
  //       realtime: true,
  //       name: 'goit-react-hw-04-phonebook',
  //       port: 3000,
  //     }),
  //   }),
});

export const persistor = persistStore(store);
