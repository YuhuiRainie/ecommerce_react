import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {api} from "./stripe-api-key";

const StripeButton = ({price}) => {
    const priceForStripe = price *100
    const publishKey = api
    return (
        <div>

        </div>
    );
};

export default StripeButton;
