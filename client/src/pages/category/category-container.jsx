import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop-selector";
import WithSpinner from "../../components/with-spinner/with-spinner";
import Category from './category'
import CollectionOverview from "../../components/collection-overview/collection-overview";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CategoryContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Category);
export  default  CategoryContainer;
