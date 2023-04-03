import { configureStore, createSlice } from "@reduxjs/toolkit"


const cartInitialState = {
    showCart: false, cartItem: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        show (state) {
            state.showCart = !state.showCart
        },
        addToCart (state, action) {
            state.cartItem = state.cartItem.concat(action.payload)
        }
    }
})

export const cartSliceActions = cartSlice.actions

const store = configureStore({
    reducer: cartSlice.reducer
})

export default store