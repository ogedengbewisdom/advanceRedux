import { configureStore, createSlice } from "@reduxjs/toolkit"


const cartInitialState = {
    showCart: false, cartItem: [], totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        show (state) {
            state.showCart = !state.showCart
        },
        addToCart (state, action) {
            const existingCartIndex = state.cartItem.findIndex(data => data.id === action.payload.id )
            const existingCart = state.cartItem[existingCartIndex]

            let updatedCarts;
            
            if (existingCart) {
                const updatedCart = {
                    ...existingCart,
                    quantity: existingCart.quantity + action.quantity
                } 

                updatedCarts = [...state.cartItem]
                updatedCarts[existingCartIndex] = updatedCart
            }
            else {
                updatedCarts = state.cartItem.concat(action.payload)
            }

            state.cartItem = updatedCarts
        }
    }
})

export const cartSliceActions = cartSlice.actions

const store = configureStore({
    reducer: cartSlice.reducer
})

export default store