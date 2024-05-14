import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/useApi";

export const currentUserFetch = createAsyncThunk(
    'currentUser/fetchCurrentUser',
    async () => {
      try {
        const  data  = await useFetch('current-user');
        return data;
      } catch (error) {
        throw error;
      }
    }
  );


const initialState = {
    status: 'idle',
    error: null,
    user: {},
};

const CurrentUserSlice = createSlice({
    name: 'currentUser',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentUserFetch.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(currentUserFetch.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(currentUserFetch.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})


export const user = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;

export const currentUser = (state) => state.currentUser.user; 