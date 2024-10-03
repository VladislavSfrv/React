import {configureStore} from "@reduxjs/toolkit";
import goodsReducer from "./Slices/CatalogGoods.js";

const store = configureStore({
    reducer:{
        goods: goodsReducer
    }
});

export default store;