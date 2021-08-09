import { addItemToCart, removeItemFromCart } from "./cartUtils"

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_DROPDOWN':
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
                // old cart items and newest action
                // ...state.cartItems -> para sa existing na nasa
                // state na natin then add action.payload
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                // if cartItem id matches, remove
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}
export default cartReducer;
// actions // eto yung ididispatch
export const toggleCart = () => ({
    type: "TOGGLE_CART_DROPDOWN"
})
export const addItem = (item) => ({
    type: "ADD_ITEM",
    payload: item,
})
export const clearItemFromCart = (item) => ({
    type: "CLEAR_ITEM_FROM_CART",
    payload: item,
})
export const removeItem = (item) => ({
    type: "REMOVE_ITEM",
    payload: item,
})