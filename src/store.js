import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import categoryReducer from "./reducer/category";
import ItemReducer from "./reducer/items";
import PaginationReducer from "./reducer/pagination";

const store = configureStore({
    reducer:{
        user : loginReducer,
        category : categoryReducer,
        items : ItemReducer,
        lists :PaginationReducer
       
    }
});

export default store