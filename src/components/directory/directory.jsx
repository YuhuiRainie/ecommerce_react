import React, {Component} from 'react'
import PropTypes from 'prop-types';
import MenuItem from "../menu-item/menu-item";
// import './directory.scss'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory-selector'
import {createStructuredSelector} from "reselect";
import Grid from '@material-ui/core/Container';

const Directory =({sections}) => {
        return (
            <Grid container className='directory-menu' direaction='row' spacing={2}>
                {sections.map(({title, imageUrl, id,size, linkUrl}) => {
                    return <Grid item> <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} /></Grid>
                })}
            </Grid>
        );
    }


const mapStateTpProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateTpProps)(Directory);
