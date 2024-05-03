import { createAsyncThunk } from "@reduxjs/toolkit";

import { Notify } from "notiflix";

import { signupRequest, loginRequest, currentRequest } from "api/auth-api";

export const signup = createAsyncThunk(
    "auth/signup",
    async (body, {rejectWithValue}) => {
        try{    
            const data = await signupRequest(body);
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

export const current = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try{
            const {auth} = getState();
            const data = await currentRequest(auth.token);
            return data;
        }
        catch(error){
            return rejectWithValue(error.response.data.message)
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token) {
                return false
            };
        }
    }
);