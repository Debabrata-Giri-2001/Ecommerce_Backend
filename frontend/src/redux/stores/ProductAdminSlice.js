import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/useApi";

export const productListFetch = createAsyncThunk(
    'admin/productsList',
    async () => {
        const response = await useFetch('/products');
        return response;
    }
)

const initialState = {
    status: 'idle',
    error: null,
    products: []
}

export const ProductAdminSlice = createSlice({
    name: 'productsAdmin',
    initialState,
    reducers: {
        // if needed it
    },
    extraReducers: (builder) => {
        builder
            .addCase(productListFetch.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(productListFetch.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(productListFetch.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default ProductAdminSlice.reducer;
