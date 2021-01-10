import {createSelector} from 'reselect'

const selectCart = state => state.cart

export  const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const quanlitySum =  createSelector(
    [selectCartItems],
    cartItems =>
        cartItems
            .map(cart => cart.quantity)
            .reduce(
                (current,accumulation) => accumulation + current,
                0)
)
