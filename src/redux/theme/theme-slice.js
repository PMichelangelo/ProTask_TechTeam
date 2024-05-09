import { createSlice } from '@reduxjs/toolkit';
import { setThemeAsync } from './theme-operations';

const initialState = {
  theme: localStorage.getItem('theme-color') || 'theme_light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setThemeAsync.fulfilled, (state, action) => {
        // Обработка успешного завершения асинхронной операции установки темы
      })
      .addCase(setThemeAsync.rejected, (state, action) => {
        // Обработка ошибки при установке темы
      });
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
