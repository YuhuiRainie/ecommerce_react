import {CartActionType} from './cart-action-type'
import {act} from "@testing-library/react";
import {addItemToCart,removeItemFromCart} from "./cart-utils";



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
        case CartActionType.DELETE_ITEM:
               return{
               ...state,
                   cartItems: state.cartItems.filter(
                       item => item.id !== action.payload.id
                   )
        }
        case CartActionType.REMOVE_QUANTITY:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state;

    }
}
export default cartReducer;
