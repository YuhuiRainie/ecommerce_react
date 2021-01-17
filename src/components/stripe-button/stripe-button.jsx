import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {api} from "./stripe-api-key";

const StripeButton = ({price}) => {
    const priceForStripe = price *100
    const publishKey = api
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
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
