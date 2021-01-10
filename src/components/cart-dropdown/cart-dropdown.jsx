import './cart-dropdown.scss'
import Button from "../button/button";
import React from 'react';
import CartItem from "../cart-item/cart-item";
import {connect} from 'react-redux'
import {selectCartItems} from "../../redux/cart/cart.selector";

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => {return <CartItem key={cartItem.id} item={cartItem} />})}
            </div>
            <Button> GO TO CHECKOUT</Button>

        </div>
    );
};
const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
