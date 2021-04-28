import './checkout-item.scss'
import React from 'react';
import {connect} from 'react-redux'
import {deleteItem,addItem,decreaseQuantity} from '../../redux/cart/cart-action'

const CheckoutItem = ({cartItem,clearItem,addItem,decreaseQuantity}) => {
    const {name,price,imageUrl,quantity} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={()=> clearItem(cartItem)}>&#10008;</span>
        </div>
    );
};
const mapDispatchProps = dispatch => ({
    clearItem:item => dispatch(deleteItem(item)),
    addItem:item => dispatch(addItem(item)),
    decreaseQuantity:item => dispatch(decreaseQuantity(item))
})

export default connect(null,mapDispatchProps)(CheckoutItem);
