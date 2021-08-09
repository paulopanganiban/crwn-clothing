import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, clearItemFromCart, removeItem } from '../redux/cartReducer'
import '../styles/checkout-item.styles.scss'
const CheckoutItem = ({
    cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                onClick={() => dispatch(removeItem(cartItem))}
                className="arrow">&#10094;</div>
                <span className="value">
                    {quantity}
                </span>
                <div 
                onClick={() => dispatch(addItem(cartItem))}
                className="arrow">&#10095;</div>

            </span>
            <span className="price">{price}</span>
            <div onClick={() => dispatch(clearItemFromCart(cartItem))}
                className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem
