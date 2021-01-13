export const addItemToCart = (existingCartArr, newItem) => {
    const idx = existingCartArr.findIndex(item => item.id === newItem.id)
    if(idx>=0) {
        existingCartArr[idx].quantity += 1
        return  [...existingCartArr]
    } else {
        return [...existingCartArr,{...newItem,quantity:1}]
    }
}

export const removeItemFromCart = (cartItems, itemToRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    )
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !==itemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === itemToRemove.id?
        {...cartItem,quantity:cartItem.quantity-1}: cartItem)
}
