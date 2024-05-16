import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../hooks/useApi";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ priceValue, category, ratings, inputQuery,page }) => {
        const url = `${BASE_URL}/products?` +
            `${priceValue ? `selling_price[gt]=${Number(priceValue)}&` : ''}` +
            `${category ? `category=${category}&` : ''}` +
            `${ratings ? `ratings=${ratings}&` : ''}` +
            `${inputQuery ? `keyword=${inputQuery}` : ''}`+
            `${page ? `page=${page}`:''}`;
        const response = await axios.get(url);
        return response.data;
    }
);


// Async thunk to fetch product details by ID
export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (id) => {
        const response = await axios.get(`${BASE_URL}/product/${id}`);
        return response.data; // Assuming response.data contains product details
    }
);

const initialState = {
    status: 'idle',
    error: null,
    products: [],
    productDetails: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Add other reducers if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchProductDetails.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.productDetails = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const {
    fetchProductsPending,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductDetailsPending,
    fetchProductDetailsSuccess,
    fetchProductDetailsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
