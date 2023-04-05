import { configureStore, createSlice } from "@reduxjs/toolkit"


const cartInitialState = {
    showCart: false, cartItem: [], totalAmout: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        show (state) {
            state.showCart = !state.showCart
        },
        addToCart (state, action) {

            const updatedTotalAmount = state.totalAmout + action.payload.quantity * action.payload.price
            const existingCartIndex = state.cartItem.findIndex(data => data.id === action.payload.id )
            const existingCart = state.cartItem[existingCartIndex]

            let updatedCarts;
            
            if (existingCart) {
                const updatedCart = {
                    ...existingCart,
                    quantity: existingCart.quantity + action.payload.quantity
                } 

                updatedCarts = [...state.cartItem]
                updatedCarts[existingCartIndex] = updatedCart
            }
            else {
                updatedCarts = state.cartItem.concat(action.payload)
            }

            state.cartItem = updatedCarts
            state.totalAmout = updatedTotalAmount
        },

        removeFromCart(state, action) {
            const existingCartIndex = state.cartItem.findIndex(data => data.id === action.payload.id)
            const existingCart = state.cartItem[existingCartIndex]
            const updatedTotalAmount = state.totalAmout - existingCart.price 
        
            let updatedCarts;
            if (existingCart && existingCart.quantity === 1) {
                updatedCarts = state.cartItem.filter(data => data.id !== action.payload.id)
            } else {
                const updatedCart = {
                    ...existingCart,
                    quantity:existingCart.quantity - 1 
                }
                updatedCarts = [...state.cartItem]
                updatedCarts[existingCartIndex] = updatedCart
            } 
            
            state.cartItem = updatedCarts
            state.totalAmout = updatedTotalAmount
        }
    }
})

export const cartSliceActions = cartSlice.actions

const store = configureStore({
    reducer: cartSlice.reducer
})

export default store