import {configureStore} from "@reduxjs/toolkit";
import goodsReducer from "./Slices/CatalogGoods.js";
import filterSizeGoods from "./Slices/CatalogGoods.js";

const store = configureStore({
    reducer:{
        goods: goodsReducer,
        filterSizeGoods : filterSizeGoods,
    }
});

export default store;