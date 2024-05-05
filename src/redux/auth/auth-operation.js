import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  //   signupRequest,
  //   loginRequest,
  //   currentRequest,
  logoutRequest,
} from 'api/auth-api';

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
