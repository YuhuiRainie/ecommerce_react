import './cart-item.scss'

import React from 'react';

const CartItem = ({item:{imageUrl, price, name,quantity}}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} />
            <div className='item-detail'>
                <span className='name'>{name}</span>
                <span className='name'>{quantity} X ${price}</span>
            </div>

        </div>
    );
};

export default CartItem;
