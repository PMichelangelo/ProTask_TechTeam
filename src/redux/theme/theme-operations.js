import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTheme } from "./theme-slice";
import { Notify } from "notiflix";


//mok api //waiting for real api
const setThemeRequest = async (theme) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ theme });
    }, 1000);
  });
};


export const setThemeAsync = createAsyncThunk(
  'theme/setTheme',
  async (theme, { rejectWithValue, dispatch }) => {
    try {
      const data = await setThemeRequest(theme);
      dispatch(setTheme(theme));
      return data;
    } catch (error) {
      Notify.failure('Failed to set theme');
      return rejectWithValue(error);
    }
  }
);
