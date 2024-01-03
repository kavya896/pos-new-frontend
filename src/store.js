import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import categoryReducer from "./reducer/category";
import ItemReducer from "./reducer/items";

const store = configureStore({
    reducer:{
        user : loginReducer,
        category : categoryReducer,
        items : ItemReducer
       
    }
});

export default store