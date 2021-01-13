import {createSelector}  from "reselect";
import memoize from 'lodash.memoize';
const CATEGORY_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = state => state.shop

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCategory = memoize(categoryUrlParam => createSelector(
    [selectShopItems],
     collections => collections.find(collection => collection.id === CATEGORY_ID_MAP[categoryUrlParam])
))
