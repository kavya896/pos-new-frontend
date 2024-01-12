import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const CreateCategoryReducer = createReducer(initialState,{
    CreateCategoryRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    CreateCategorySuccess:(state,action)=>{
        state.loading = false
        state.createCategory= action.payload
        state.isAuthenticated = true
    },
    CreateCategoryFail:(state,action)=>{
        state.loading = false
        state.createCreateFail= action.payload
        state.isAuthenticated = false
    }
   
})

export default CreateCategoryReducer