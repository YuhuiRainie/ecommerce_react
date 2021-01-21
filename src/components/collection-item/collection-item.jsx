import React from 'react';
import './collection-item.scss'
import Button from "../button/button";
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart-action";
import {Grid} from "@material-ui/core";


const CollectionItem = ({item,addItem}) => {
    const { id, name, price, imageUrl} = item
    return (
        <Grid container item className='collection-item' key={id} xs={12} sm={6} md={5} lg={3} >
            <Grid container className='collection-footer' direction='row' justify='space-between' style={{width:'85%'}}>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </Grid>
            <div className='image'
                 style={{backgroundImage:`url(${imageUrl})`,backgroundSize:'cover',width:'100%',height:'400px'}} />

            <Button onClick={()=>addItem(item)}>ADD TO CART</Button>
        </Grid>
    );
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
