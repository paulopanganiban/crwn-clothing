import { addItemToCart } from "./cartUtils"

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