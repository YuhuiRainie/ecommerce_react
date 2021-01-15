import './collection-overview.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import PreviewCollection from "../preview-collection/preview-collection";
import React from 'react';
import {selectShopItems,selectItemsForPreview} from "../../redux/shop/shop-selector";

const CollectionOverview = ({collections}) => {
    console.log(collections)
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollections}) => (
                <PreviewCollection key={id} {...otherCollections} />
            ))}
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    collections:selectItemsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);
