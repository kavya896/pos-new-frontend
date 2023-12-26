import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const loginReducer = createReducer(initialState,{
    LoginRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    LoginSuccess:(state,action)=>{
        state.loading = false
        state.user= action.payload
        state.isAuthenticated = true
    },
    LoginFail:(state,action)=>{
        state.loading = false
        state.usererror = action.payload
        state.isAuthenticated = false
    }
   

})



export default loginReducer