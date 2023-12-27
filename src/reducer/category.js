import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const categoryReducer = createReducer(initialState,{
    CategoryRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    CategorySuccess:(state,action)=>{
        state.loading = false
        state.category= action.payload
        state.isAuthenticated = true
    },
    CategoryFail:(state,action)=>{
        state.loading = false
        state.category = action.payload
        state.isAuthenticated = false
    }
   

})



export default categoryReducer