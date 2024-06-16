import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // Vanialla(older) Redux => Don't mutuate state and returning was mandatory
        // const newState = [...state]
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
        //RTK says either mutate the existing state or return a new state
        state.items.length = 0; // originalState = []
        // return {items : []} // this new object will be replaced inside originalstate
       },
       removeSelectedItem : (state,action) =>{
        console.log("state",current(state))
        console.log("ACTION",action)
        const indexToRemove = state.items.findIndex(obj => obj.id === action.payload.id);
        // let findobject =   state.items.find((item)=> item.id == action.payload.id)

        if (indexToRemove !== -1) {
            state.items.splice(indexToRemove, 1);
        }
       }
    }
});

export const {addItem, removeItem, clearCart, removeSelectedItem} = cartSlice.actions;
export default cartSlice.reducer;