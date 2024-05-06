import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import columnsReducer from './columns/columns-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'quote'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  columns: columnsReducer,
});

export default rootReducer;
