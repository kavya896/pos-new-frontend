import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const CountReducer = createReducer(initialState,{
    CountRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    CountSuccess:(state,action)=>{
        state.loading = false
        state.count= action.payload
        state.isAuthenticated = true
    },
    CountFail:(state,action)=>{
        state.loading = false
        state.count = action.payload
        state.isAuthenticated = false
    }
   

})



export default CountReducer