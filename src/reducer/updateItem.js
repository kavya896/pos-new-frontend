import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const UpdateItemReducer = createReducer(initialState,{
    UpdateItemRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    UpdateItemSuccess:(state,action)=>{
        state.loading = false
        state.updateItems= action.payload
        state.isAuthenticated = true
    },
    UpdateItemFail:(state,action)=>{
        state.loading = false
        state.updateItems = action.payload
        state.isAuthenticated = false
    }
   

})



export default UpdateItemReducer