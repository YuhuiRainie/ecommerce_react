import React, {Component, useEffect} from 'react';


import PreviewCollection from "../../components/preview-collection/preview-collection";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import {Route} from 'react-router-dom'
import Category from "../category/category";

import {connect} from 'react-redux'
import {updateCollections} from "../../redux/shop/shop-action";
import WithSpinner from '../../components/with-spinner/with-spinner'
import {fetchCollectionsStart} from "../../redux/shop/shop-action";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop-selector'
import CollectionOverviewContainer from '../../components/collection-overview/overview-container'
import CategoryContainer from "../category/category-container";


const Shop =({match,fetchCollectionsStart}) =>{
    useEffect(() => {fetchCollectionsStart()},[fetchCollectionsStart])
    // componentDidMount() {
    //     const {fetchCollectionsStart} = this.props
    //     fetchCollectionsStart()
    // }

    // render() {
    //     const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route exact path={`${match.path}/:categoryId`} component={CategoryContainer} />

            </div>
        );
    // }



}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(Shop);
