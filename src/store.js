import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import categoryReducer from "./reducer/category";
import ItemReducer from "./reducer/items";
import StockReducer from "./reducer/stocks";
import CreateItemReducer from "./reducer/createItem";
import UpdateItemReducer from "./reducer/updateItem";
import GetItemReducer from "./reducer/getItem";
import categoryNameReducer from "./reducer/categoryByname";

const store = configureStore({
    reducer:{
        user : loginReducer,
        category : categoryReducer,
        items : ItemReducer,
        stocks :StockReducer,
        createItem :CreateItemReducer,
        updateItems : UpdateItemReducer,
        getItems : GetItemReducer,
        byNames : categoryNameReducer
       
    }
});

export default store