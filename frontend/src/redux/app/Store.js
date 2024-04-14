import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../stores/ProductsSlice';
export const Store = configureStore({
    reducer: {
        products: ProductsReducer,
    }
})