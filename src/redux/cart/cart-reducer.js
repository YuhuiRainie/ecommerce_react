import {CartActionType} from './cart-action-type'
const INIITIAL_STATE = {
    hidden:true
}
const cartReducer = (state = INIITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN : {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        default:
            return state;

    }
}
export default cartReducer;
