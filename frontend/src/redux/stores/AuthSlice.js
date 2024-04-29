import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../hooks/useApi";

// Create Async Thunk for login
export const LoginFun = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, credentials);
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
);

// Initial state
const initialState = {
    user: {},
    loading: false,
    isAuthenticated: false,
    error: null
};

// Create auth slice
const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        clearErrors: (state) => {
            state.error = null;
        },
        setCreditional: (state, action) => {
            state.user = action.payload.user;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginFun.pending, (state) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(LoginFun.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(LoginFun.rejected, (state, action) => {
                console.log("action==",action)
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
            });
    }
});

export const { clearErrors,setCreditional } = AuthSlice.actions;
export default AuthSlice.reducer;