import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DATA from "./data";
import PreviewCollection from "../../components/preview-collection/preview-collection";


class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections:DATA
        };

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const {collections} = this.state;
        {console.log("collection"+collections[0])}
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollections}) => (
                     <PreviewCollection key={id} {...otherCollections} />
                    ))}
            </div>
        );
    }
}

Shop.propTypes = {};

export default Shop;
