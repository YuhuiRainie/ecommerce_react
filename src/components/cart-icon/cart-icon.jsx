import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from "../../assert/shopping-bag.svg";
import React, {useContext} from 'react';
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart-action'
import {quanlitySum} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import CartContext from "../../contexts/cart/cart.context";

const CartIcon = ({quantitySum}) => {
    const {toggleHidden} = useContext(CartContext)
    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon  className='shopping-icon' />
                <span className='item-quantity'> {quantitySum}</span>
        </div>
    );
};
const mapStateToProps = createStructuredSelector ({
    quantitySum: quanlitySum
})

export default connect(
    mapStateToProps,
)(CartIcon);
