import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PreviewCollection from "../../components/preview-collection/preview-collection";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import {Route} from 'react-router-dom'
import Category from "../category/category";

const Shop = ({match}) => {
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route exact path={`${match.path}/:categoryId`} component={Category} />

            </div>
        );

}



export default Shop;
