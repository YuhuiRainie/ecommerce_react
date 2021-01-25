import {createSelector}  from "reselect";
import memoize from 'lodash.memoize';


const selectShop = state => state.shop

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectItemsForPreview = createSelector(
    [selectShopItems],
    collections=> collections ? Object.keys(collections).map(key => key= collections[key] ) : []
)


export const selectCategory = categoryUrlParam =>
    createSelector(
    [selectShopItems],
     collections => collections ? collections[categoryUrlParam]: null
    );
