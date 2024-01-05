import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import categoryReducer from "./reducer/category";
import ItemReducer from "./reducer/items";
import StockReducer from "./reducer/stocks";
import CreateItemReducer from "./reducer/createItem";

const store = configureStore({
    reducer:{
        user : loginReducer,
        category : categoryReducer,
        items : ItemReducer,
        stocks :StockReducer,
        createItem :CreateItemReducer
       
    }
});

export default store