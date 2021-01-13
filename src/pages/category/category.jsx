import React from 'react';
import './category.scss'
import {selectCategory} from '../../redux/shop/shop-selector'
import {connect} from 'react-redux'

const Category = ({category}) => {
    console.log(category)
    return (
        <div className='category'>
            <h2>CATEGORY PAGE</h2>
        </div>
    );
};
const mapStateToProps = (state,ownProps)=>({
    category:selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(Category);
