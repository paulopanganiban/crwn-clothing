import React from 'react'
import { Button } from '@material-ui/core';
import '../styles/cart-dropdown.styles.scss'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
const CartDropDown = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <motion.div className="cart-dropdown"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        >
            <div className="cart-items">
                {cartItems.map(cartItem =>
                    <CartItem key={cartItem.id}
                        item={cartItem}
                    />)}
            </div>
            <Button>Checkout</Button>
        </motion.div>
    )
}

export default CartDropDown
