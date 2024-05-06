import { createSlice } from "@reduxjs/toolkit";

import { register, login } from "./auth-operation";

import {pending, rejected} from "../../shared/functions/redux"

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.pending, pending)
            .addCase(register.fulfilled, (state, {payload}) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(register.rejected, rejected)
            
            .addCase(login.pending, pending)
            .addCase(login.fulfilled, (state, {payload}) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin = true;
                state.isLoading = false;
                state.error = null;
            })
    }
});

export default authSlice.reducer;
