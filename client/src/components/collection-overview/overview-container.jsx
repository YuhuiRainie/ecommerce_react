import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop-selector";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionOverview from './collection-overview'
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
})
const CollectionOverviewContainer = compose(
        connect(mapStateToProps),
        WithSpinner
    )(CollectionOverview);
export  default  CollectionOverviewContainer;
