import {useState,createContext} from "react";

export const CartContext = createContext({
    hidden:true,
    toggleHidden:()=>{},
    cartItems:[],
    addItem:()=> {},
    removeItem:() => {},
    clearItemFromCart:() =>{},
    cartItemsCount:0

})
const CartProvider = ({children}) => {
    const [hidden,setHidden] = useState(true)
    const [cartItems,setCartItems] = useState([])
    const [cartItemsCount,setCartItemCount] = useState(0)
    const addItem = item => setCartItems(addItem(cartItems,item))
    const toggleHidden = () => setHidden(!hidden)
    return (
        <CartContext.Provider
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            cartItemsCount
        }}
        >{children}</CartContext.Provider>)
}

export default CartProvider;