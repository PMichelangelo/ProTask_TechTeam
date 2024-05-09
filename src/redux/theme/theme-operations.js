import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTheme } from "./theme-slice";
import { Notify } from "notiflix";

const setThemeRequest = async (theme) => {
  // Ваша логика для установки темы
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ theme }); // Возвращаем выбранную тему вместо данных с сервера
    }, 1000); // Мок-задержка для имитации запроса
  });
};


export const setThemeAsync = createAsyncThunk(
  'theme/setTheme',
  async (theme, { rejectWithValue, dispatch }) => {
    try {
      const data = await setThemeRequest(theme);
      Notify.success(`Theme "${theme}" has been successfully set!`);
      dispatch(setTheme(theme)); // Обновляем тему в Redux Store
      return data;
    } catch (error) {
      Notify.failure('Failed to set theme');
      return rejectWithValue(error);
    }
  }
);
