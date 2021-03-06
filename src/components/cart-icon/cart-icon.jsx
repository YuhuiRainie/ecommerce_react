import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from "../../assert/shopping-bag.svg";
import React from 'react';
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart-action'
import {quanlitySum} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden,quantitySum}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon  className='shopping-icon' />
                <span className='item-quantity'> {quantitySum}</span>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector ({
    quantitySum: quanlitySum
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
