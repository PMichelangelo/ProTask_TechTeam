import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import columnsReducer from './columns/columns-slice';
import themeReducer from './theme/theme-slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'theme'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  columns: columnsReducer,
  theme: persistedThemeReducer,
});

export default rootReducer;
