import { createAsyncThunk } from "@reduxjs/toolkit";

import { Notify } from "notiflix";

import { registerRequest, loginRequest } from "api/auth-api";

export const register = createAsyncThunk(
    "auth/register",
    async (body, {rejectWithValue}) => {
        try{    
            const data = await registerRequest(body);
            Notify.success("Registration has been successful!")
            return data;
        }
        catch(error){
            Notify.failure("Wrong email or password. The password must contain at least 8 symbols.")
            return rejectWithValue(console.log(error.response.data.message));
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (body, {rejectWithValue}) => {
        try{    
            const data = await loginRequest(body);
            Notify.success("You've successfully logged in!")
            return data;
        }
        catch(error){
            Notify.failure("Wrong email or password")
            return rejectWithValue(console.log(error.response.data.message));
        }
    }
);