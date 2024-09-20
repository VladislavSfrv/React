import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../actions/themeReducer.js';

const store = configureStore({reducer: {theme: themeReducer} });

export default store;