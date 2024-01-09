import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const DeleteReducer = createReducer(initialState,{
    DeleteRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    DeleteSuccess:(state,action)=>{
        state.loading = false
        state.deleted= action.payload
        state.isAuthenticated = true
    },
    DeleteFail:(state,action)=>{
        state.loading = false
        state.deleted = action.payload
        state.isAuthenticated = false
    }
   

})



export default DeleteReducer