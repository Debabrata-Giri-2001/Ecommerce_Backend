import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../stores/ProductsSlice';
import AuthReducer from '../stores/AuthSlice';
import currentUserReducer from '../stores/CurrentUserSlice'
export const Store = configureStore({
    reducer: {
        auth:AuthReducer,
        products: ProductsReducer,
        currentUser:currentUserReducer,
    }
})