import React from 'react';
import CollectionItem from "../collection-item/collection-item";
import './preview-collection.scss'
import {Grid} from "@material-ui/core";
import { withRouter } from 'react-router-dom';

const PreviewCollection = ({title,items,history,match,routeName}) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
        <Grid container direction='row' justify='space-between' spacing={2}>
            {items
                .filter((item,idx) =>idx<4 )
                .map(item => {
                return <CollectionItem key={item.id} item={item}/>
            })}
        </Grid>
    </div>
);

export default withRouter(PreviewCollection);
