import React from 'react';
// import './category.scss'
import {selectCategory} from '../../redux/shop/shop-selector'
import {connect} from 'react-redux'
import CollectionItem from "../../components/collection-item/collection-item";
import {Grid} from "@material-ui/core";

const Category = ({category}) => {
    const {title,items} = category;
    return (
        <div className='category-page'>
            <h1 className='title'>{title}</h1>
            <Grid container direction='row' spacing={2}>
                {items.map (item =><CollectionItem key={item.id} item={item} />)}
            </Grid>
        </div>
    );
};
const mapStateToProps = (state,ownProps)=>({
    category:selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(Category);
