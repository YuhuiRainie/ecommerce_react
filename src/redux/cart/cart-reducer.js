import {CartActionType} from './cart-action-type'
import {act} from "@testing-library/react";
import {addItemToCart} from "./cart-utils";

const INIITIAL_STATE = {
    hidden:true,
    cartItems:[]
}
const cartReducer = (state = INIITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionType.ADD_ITEMS:
           return{
               ...state,
               cartItems: addItemToCart(state.cartItems,action.payload)
           }
        default:
            return state;

    }
}
export default cartReducer;
