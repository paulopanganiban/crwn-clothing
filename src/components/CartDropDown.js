import React from 'react'
import { Button } from '@material-ui/core';
import '../styles/cart-dropdown.styles.scss'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { Link, withRouter } from 'react-router-dom'

const CartDropDown = ({history}) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <motion.div className="cart-dropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {
                cartItems.length ? (<div className="cart-items">
                    {cartItems.map(cartItem =>
                        <CartItem key={cartItem.id}
                            item={cartItem}
                        />)}
                </div>) : (<span className="empty-message">Your cart is empty</span>)

            }
                <Button className="button" onClick={() => history.push('/checkout')}>Checkout</Button>
        </motion.div>
    )
}

export default withRouter(CartDropDown)
