import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const CreateItemReducer = createReducer(initialState,{
    CreateItemRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    CreateItemSuccess:(state,action)=>{
        state.loading = false
        state.createItem= action.payload
        state.isAuthenticated = true
    },
    CreateItemFail:(state,action)=>{
        state.loading = false
        state.createItemFail= action.payload
        state.isAuthenticated = false
    }
   

})



export default CreateItemReducer