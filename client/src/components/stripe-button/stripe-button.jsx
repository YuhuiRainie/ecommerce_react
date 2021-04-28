import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {api} from "./stripe-api-key";
import axios from "axios";
const StripeButton = ({price}) => {
    const priceForStripe = price *100
    const publishKey = api
    const onToken = token => {
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response => {
            alert("payment successful")
        }).catch(error => {
            console.log('payment error:', JSON.parse(error))
            alert('there was an issue with your payment. please change a card.')
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Rainie Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={api}
        />
    );
};

export default StripeButton;
