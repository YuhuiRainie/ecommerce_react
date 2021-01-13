import {CartActionType} from './cart-action-type'

export const  toggleCartHidden = () => ({
    type : CartActionType.TOGGLE_CART_HIDDEN
});
export const addItem = item => ({
    type: CartActionType.ADD_ITEMS,
    payload:item
});
export const deleteItem = item => ({
    type:CartActionType.DELETE_ITEM,
    payload:item
});
 export const decreaseQuantity = item =>({
     type:CartActionType.REMOVE_QUANTITY,
     payload:item
 });
