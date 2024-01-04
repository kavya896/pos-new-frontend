import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const StockReducer = createReducer(initialState,{
    StockRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    StockSuccess:(state,action)=>{
        state.loading = false
        state.stocks= action.payload
        state.isAuthenticated = true
    },
    StockFail:(state,action)=>{
        state.loading = false
        state.stocks = action.payload
        state.isAuthenticated = false
    }
   

})



export default StockReducer