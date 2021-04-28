import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const quanlitySum =  createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.map(cart => cart.quantity)
                    .reduce(
                        (current,accumulation) => accumulation + current,
                        0)
)

export const itemTotalPrice = createSelector(
    [selectCartItems],
    cartItems=>
        cartItems.reduce(
        (accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,0
    )
)
