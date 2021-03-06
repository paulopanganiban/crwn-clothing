import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutItem from '../components/CheckoutItem'
import StripeButton from '../components/StripeButton'
import '../styles/checkout.styles.scss'
const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartItemsTotalPrice = cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
   
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                   <CheckoutItem
                   key={cartItem.id}
                   cartItem={cartItem}
                   />
                ))
            }
            <div className="total">
                <span>TOTAL: ${cartItemsTotalPrice}</span>
            </div>
                <StripeButton price={cartItemsTotalPrice}/>
        </div>

    )
}

export default Checkout
