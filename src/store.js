import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";

const store = configureStore({
    reducer:{
        user : loginReducer,
       
    }
});

export default store