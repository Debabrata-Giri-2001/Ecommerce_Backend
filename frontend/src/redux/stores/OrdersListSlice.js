import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../hooks/useApi";


//Asynk Product ordcer list
export const FetchOrderList = createAsyncThunk(
    `admin/orderList`,
    async () => {
        const response = await axios.get(`${BASE_URL}/admin/orders`);
        return response;
    }
)

const initialState = {
    status: 'idle',
    error: null,
    orderList: [],
    orderList: null,
}

const orderListSlice = createSlice({
    name: 'orderList',
    initialState,
    reducers: {
        //if need it
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchOrderList.pending,(state)=>{
                state.status = 'loading';
                state.error = null;
            })
            .addCase(FetchOrderList.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(FetchOrderList.rejected,(state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const {
    fetchFetchOrderListPending,
    fetcFetchOrderListSuccess,
    fetchFetchOrderListFailure
} = orderListSlice.actions;

export default orderListSlice.reducer;