import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import categoryReducer from "./reducer/category";

const store = configureStore({
    reducer:{
        user : loginReducer,
        category : categoryReducer
       
    }
});

export default store