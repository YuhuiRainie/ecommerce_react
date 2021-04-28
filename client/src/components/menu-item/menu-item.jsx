import React from 'react';
import './menu-item.scss'
import {withRouter} from 'react-router-dom';
import {Grid,Typography} from '@material-ui/core';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match }) => {
    return (

        <div className={`${size} menu-item`}
              onClick={() => history.push(`${match.url}${linkUrl}`) }


        >
            <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='content'>
             <h2>{title.toUpperCase()}</h2>
            <h3>SHOP NOW</h3>
            </div>
        </div>


    );
};

export default withRouter(MenuItem);
