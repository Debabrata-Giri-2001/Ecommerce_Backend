// AuthSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../hooks/useApi";


// handel login
export const LoginFun = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        const config = { headers: { "Content-Type": "application/json" } };
        try {
            const response = await axios.post(`${BASE_URL}/login`, credentials, config);
            const authData = {
                scccess: response.data.scccess,
                user: response.data.user,
                token: response.data.token
            };
            return authData;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
);


// initial state
const initialState = {
    scccess: null,
    user: null,
    token: null,
    loading: false,
    error: null
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setCreditional: (state, action) => {
            const { scccess, user, token } = action.payload;
            state.scccess = scccess;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.scccess = null;
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginFun.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(LoginFun.fulfilled, (state, action) => {
                state.scccess = 'succeeded'
                const authData = action.payload;
                if (authData) {
                    state.loading = false;
                    state.scccess = authData.scccess; 
                    state.user = authData.user;
                    state.token = authData.token;
                }
            })            
            .addCase(LoginFun.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error;
            })
    }
})


export const { setCreditional, logout } = AuthSlice.actions;
export default AuthSlice.reducer;