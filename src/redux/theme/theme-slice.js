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
      })
      .addCase(setThemeAsync.rejected, (state, action) => {
      });
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
