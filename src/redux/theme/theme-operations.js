import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTheme } from "./theme-slice";
import { Notify } from "notiflix";
import { updateTheme } from "../../api/theme-api";


export const setThemeAsync = createAsyncThunk(
  'theme/setTheme',
  async (theme, { rejectWithValue, dispatch }) => {
    try {
      const responseData = await updateTheme(theme);
      dispatch(setTheme(theme));
      return responseData;
    } catch (error) {
      Notify.failure('Failed to set theme');
      return rejectWithValue(error);
    }
  }
);
