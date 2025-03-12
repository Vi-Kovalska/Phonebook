import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';
import { authReducers } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeToggleReducer } from './theme/slice';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const themePersistConfig = {
  key: 'themeToggle',
  storage,
  whitelist: ['theme'],
};
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducers),
    themeToggle: persistReducer(themePersistConfig, themeToggleReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
