import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const PaginationReducer = createReducer(initialState,{
    PaginationRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    PaginationSuccess:(state,action)=>{
        state.loading = false
        state.items= action.payload
        state.isAuthenticated = true
    },
    PaginationFail:(state,action)=>{
        state.loading = false
        state.items = action.payload
        state.isAuthenticated = false
    }
   

})



export default PaginationReducer