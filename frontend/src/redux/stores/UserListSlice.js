import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/useApi";

//Asynk Product ordcer list
export const allUserListFetch = createAsyncThunk(
    `admin/orderList`,
    async () => {
        const response = useFetch(`/admin/users`);
        return response;
    }
)
const initialState = {
    status: 'idle',
    error: null,
    user: [],
};

const UserListSlice = createSlice({
    name: 'userList',
    initialState: initialState,
    reducers: {
        // if it needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(allUserListFetch.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(allUserListFetch.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(allUserListFetch.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})


export default UserListSlice.reducer