import React from 'react'
import '../styles/stripe-button.styles.scss'
import StripeCheckout from 'react-stripe-checkout'
const StripeButton = ({ price }) => {
    const priceForStripe = price*100;
    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }
    const publishableKey = 'pk_test_51IipzeJk62S2zIHk1wU76WyYEk0btPOCpD2nBEwPYdWK315tizfJpzMFmX404BidelFBaFBJsGkKDhz6H1qzE7rk00MLPcaPwK'
    return (
        <StripeCheckout
        label='Pay Now'
        name='EZ Project Co.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        /> 
    )
}

export default StripeButton
