import {CartActionType} from './cart-action-type'

export const  toggleCartHidden = () => ({
    type : CartActionType.TOGGLE_CART_HIDDEN
});
export const addItem = item => ({
    type: CartActionType.ADD_ITEMS,
    payload:item
});
