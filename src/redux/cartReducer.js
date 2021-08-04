const initialState = {
    hidden: true
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_DROPDOWN':
            return {
                ...state,
                hidden: !state.hidden
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