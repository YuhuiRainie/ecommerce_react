import React,{useContext} from 'react';
import CollectionItem from "../../components/collection-item/collection-item";
import {Grid} from "@material-ui/core";
import CollectionsContext from "../../contexts/collections/collections.context";

const Category = ({match}) => {
    const collections = useContext(CollectionsContext)
    const collection = collections[match.params.categoryId]
    const {title,items} = collection;
    return (
        <div className='category-page'>
            <h1 className='title'>{title}</h1>
            <Grid container direction='row' spacing={2}>
                {items.map (item =><CollectionItem key={item.id} item={item} />)}
            </Grid>
        </div>
    );
};
export default Category;
