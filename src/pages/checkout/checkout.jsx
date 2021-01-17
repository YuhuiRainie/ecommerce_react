import './checkout.scss'
import React from 'react';
import {connect} from 'react-redux'
import {selectCartItems,itemTotalPrice} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button";


const Checkout = ({cartItems,total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))}
            <div className='total'>
                <span>TOTAL:${total}</span>
            </div>

            <div className='test-warning'>
                * Please use the following test Australia credit card for paymemnt. Cvv is any 3 digital numbers and expire date can be any!
                <br />
                400 0003 6000 0006
            </div>
            <StripeButton price={total} />
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: itemTotalPrice
})
export default connect(mapStateToProps)(Checkout);
