import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartGoods: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoodToCart(state, action) {
            console.log(action.payload);
            const index = state.cartGoods.findIndex((item) => item.id === action.payload.id);
            if (index === -1) {
                state.cartGoods.push({ ...action.payload, quantity: 1 });
            } else {
                state.cartGoods[index].quantity++;
            }
            state.totalPrice += parseInt(action.payload.price);
            // localStorage.setItem("cartGoods", JSON.stringify({ ...action.payload, quantity: 1 }));
        },
        removeGoodFromCart(state, action) {
            const index = state.cartGoods.findIndex((item) => item.id === action.payload.id);
            const quantity = state.cartGoods[index].quantity;
            state.cartGoods.splice(index, 1);
            state.totalPrice -= action.payload.price * quantity;
            // localStorage.removeItem("cartGoods");
        },
        clearCart(state) {
            state.cartGoods = [];
            state.totalPrice = 0;
            // localStorage.clearItem("cartGoods");
        },
    }
})

export default cartSlice.reducer;
export const { addGoodToCart, removeGoodFromCart, clearCart } = cartSlice.actions;