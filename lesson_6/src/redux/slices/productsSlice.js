import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProducts = {
                id: Date.now(),
                name: action.payload[0],
                description: action.payload[1],
                price: action.payload[2],
                available: action.payload[3],
            }
            state.products.push(newProducts);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => {
                return product.id !== action.payload
            });
        }
    }
});
export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;