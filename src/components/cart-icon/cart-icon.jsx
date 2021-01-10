import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from "../../assert/shopping-bag.svg";
import React from 'react';
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart-action'

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon  className='shopping-icon' />
                <span className='item-quantity'> 0</span>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);
