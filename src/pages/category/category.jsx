import React from 'react';
import './category.scss'
import {selectCategory} from '../../redux/shop/shop-selector'
import {connect} from 'react-redux'
import CollectionItem from "../../components/collection-item/collection-item";

const Category = ({category}) => {
    const {title,items} = category;
    return (
        <div className='category-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map (item =><CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    );
};
const mapStateToProps = (state,ownProps)=>({
    category:selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(Category);
