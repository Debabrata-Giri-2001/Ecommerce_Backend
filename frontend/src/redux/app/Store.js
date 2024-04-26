import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../stores/ProductsSlice';
import AuthReducer from '../stores/AuthSlice';
export const Store = configureStore({
    reducer: {
        auth:AuthReducer,
        products: ProductsReducer,
    }
})