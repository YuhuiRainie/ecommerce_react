import './cart-dropdown.scss'
import Button from "../button/button";
import React from 'react';
import CartItem from "../cart-item/cart-item";
import {connect} from 'react-redux'
import {selectCartItems} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from "../../redux/cart/cart-action";

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length>0?
                    (cartItems.map(cartItem => {return <CartItem key={cartItem.id} item={cartItem} />}))
                    :(<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <Button onClick={() => {history.push('./checkout');dispatch(toggleCartHidden())}}> GO TO CHECKOUT</Button>

        </div>
    );
};
const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
