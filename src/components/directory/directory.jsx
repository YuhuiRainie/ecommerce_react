import React, {Component} from 'react'
import PropTypes from 'prop-types';
import MenuItem from "../menu-item/menu-item";
import './directory.scss'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory-selector'
import {createStructuredSelector} from "reselect";

const Directory =({sections}) => {
        return (
            <div className='directory-menu'>
                {sections.map(({title, imageUrl, id,size, linkUrl}) => {
                   return  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                })}
            </div>
        );
    }


const mapStateTpProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateTpProps)(Directory);
