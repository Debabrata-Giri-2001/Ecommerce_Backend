import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../stores/ProductsSlice';
import AuthReducer from '../stores/AuthSlice';
import currentUserReducer from '../stores/CurrentUserSlice'
import cartsSlice from "../stores/cartsSlice";
export const Store = configureStore({
    reducer: {
        auth:AuthReducer,
        products: ProductsReducer,
        currentUser:currentUserReducer,
        cart:cartsSlice
    }
})