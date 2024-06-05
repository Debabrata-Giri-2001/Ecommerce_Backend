import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../stores/ProductsSlice';
import AuthReducer from '../stores/AuthSlice';
import currentUserReducer from '../stores/CurrentUserSlice'
import cartsSlice from "../stores/cartsSlice";
import OrdersListSlice from "../stores/OrdersListSlice";
import UserListSlice from "../stores/UserListSlice";
export const Store = configureStore({
    reducer: {
        auth:AuthReducer,
        products: ProductsReducer,
        currentUser:currentUserReducer,
        cart:cartsSlice,
        orderList:OrdersListSlice,
        userList:UserListSlice
    }
})