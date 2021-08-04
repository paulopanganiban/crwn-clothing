import React from 'react'
import { Button } from '@material-ui/core';
import '../styles/cart-dropdown.styles.scss'
const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropDown
