import React from 'react'
import '../styles/cart-item.styles.scss'
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {

    return (
        <div className="cart-item">
            <img src={imageUrl} alt="" srcset="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="name">₱{price}</span>
                <span className="price">
                    {quantity}
                    {' '}x
                    ₱{price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
