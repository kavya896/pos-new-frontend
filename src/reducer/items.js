import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const ItemReducer = createReducer(initialState,{
    ItemRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    ItemSuccess:(state,action)=>{
        state.loading = false
        state.items= action.payload
        state.isAuthenticated = true
    },
    ItemFail:(state,action)=>{
        state.loading = false
        state.items = action.payload
        state.isAuthenticated = false
    }
   

})



export default ItemReducer