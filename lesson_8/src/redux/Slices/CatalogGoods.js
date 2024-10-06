import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goods from "../../data/goods";

export const fetchGoods = createAsyncThunk(
    'products/fetchGoods',
    async (_, thunkApi) => {
        try {
            const promise = new Promise((resolve) => {
                resolve(goods);
            });
            return promise;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    goods: [],
    error: null,
    loading: false,
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchGoods.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchGoods.fulfilled, (state, action) => {
                    state.loading = false;
                    state.goods = action.payload;
                })
                .addCase(fetchGoods.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                })
        },
})

export default goodsSlice.reducer;
export const { fetchGoodsFailure, fetchGoodsSuccess, fetchGoodsRequest } = goodsSlice.actions;