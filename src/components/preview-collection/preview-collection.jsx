import React from 'react';
import CollectionItem from "../collection-item/collection-item";
import './preview-collection.scss'

const PreviewCollection = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item,idx,arr) =>idx<4 )
                .map(({id, ...otherPropms}) => {
                return <CollectionItem key={id} {...otherPropms}/>
            })}
        </div>
    </div>
);

export default PreviewCollection;
