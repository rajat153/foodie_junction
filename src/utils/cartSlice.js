import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //Vaniall(older) REdux => Dont mutuate state returning was mandatory
        //const newState = [...state]
        // newState.items.push(action.payload)
        // return newState

       addItem : (state, action) =>{
        //mutating the state here
        state.items.push(action.payload);
       },
       removeItem : (state,action) =>{
        state.items.pop();
       },
       clearCart : (state) =>{
        state.items.length = 0;
       }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;