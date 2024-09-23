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
                name: prompt("Введите название продукта"),
                description: prompt("Введите описание продукта"),
                price: prompt("Введите цену продукта"),
                available: prompt("Введите количество продукта"),
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