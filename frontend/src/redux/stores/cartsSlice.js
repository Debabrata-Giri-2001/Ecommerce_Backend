import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartProducts(state, action) {
            const product = action.payload;
            const existingProduct = state.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...product, quantity: 1 });
            }
        },
        increaseProducts(state, action) {
            const productId = action.payload;
            const existingProduct = state.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decreaseProducts(state, action) {
            const productId = action.payload;
            const existingProduct = state.find(item => item.id === productId);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else if (existingProduct && existingProduct.quantity === 1) {
                return state.filter(item => item.id !== productId);
            }
        },
        remove(state, action) {
            const productId = action.payload;
            return state.filter(item => item.id !== productId);
        }
    }
});

export const { addToCartProducts, increaseProducts, decreaseProducts, remove } = cartSlice.actions;
export default cartSlice.reducer;
