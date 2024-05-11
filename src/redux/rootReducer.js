import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import dashboardsReducer from './dashboards/dashboards-slice';
import columnsReducer from './columns/columns-slice';
import tasksReducer from './tasks/tasks-slice';
import themeReducer from './theme/theme-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'theme'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  dashboards: dashboardsReducer,
  columns: columnsReducer,
  tasks: tasksReducer,
  theme: persistedThemeReducer,
});

export default rootReducer;
