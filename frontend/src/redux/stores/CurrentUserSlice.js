import { createSlice } from "@reduxjs/toolkit";

const CurrentUserSlice = createSlice({
    name:'currentUser',
    initialState:null,
    reducers:{
        setCurrentUser:(state,action)=>{
            const user = action.payload;
            state.user = user;
        }
    }
})

export const user = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;

export const currentUser = (state) => state.currentUser.user; 