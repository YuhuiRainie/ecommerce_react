import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PreviewCollection from "../../components/preview-collection/preview-collection";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import {Route} from 'react-router-dom'
import Category from "../category/category";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {updateCollections} from "../../redux/shop/shop-action";
import WithSpinner from '../../components/with-spinner/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionsPageWithSpinner = WithSpinner(Category)
class Shop extends React.Component{
    state={
        loading:true
    }
    unsubscribeFromSnapShot = null


    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            console.log(snapshot)
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap)
            this.setState({loading:false})
        })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route exact path={`${match.path}/:categoryId`}  render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />

            </div>
        );
    }



}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shop);
