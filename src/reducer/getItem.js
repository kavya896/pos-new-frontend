import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const GetItemReducer = createReducer(initialState,{
    GetItemRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    GetItemSuccess:(state,action)=>{
        state.loading = false
        state.getItems= action.payload
        state.isAuthenticated = true
    },
    GetItemFail:(state,action)=>{
        state.loading = false
        state.getItems = action.payload
        state.isAuthenticated = false
    }
   

})



export default GetItemReducer