export const addItemToCart = (existingCartArr, newItem) => {
    const idx = existingCartArr.findIndex(item => item.id === newItem.id)
    if(idx>=0) {
        existingCartArr[idx].quantity += 1
        return  [...existingCartArr]
    } else {
        return [...existingCartArr,{...newItem,quantity:1}]
    }
}
