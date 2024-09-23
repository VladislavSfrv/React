import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./slices/todoSlice.js"
import favoriteReducer from './slices/favoriteSlice.js';
import productsReducer from './slices/productsSlice.js';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        favorite: favoriteReducer,
        products: productsReducer,
    }
});

export default store;