import {configureStore} from "@reduxjs/toolkit";
import goodsReducer from "./Slices/CatalogGoods.js";
import cartReducer from "./Slices/cartSlice.js";

const store = configureStore({
    reducer:{
        goods: goodsReducer,
        cart: cartReducer,
    }
});

export default store;