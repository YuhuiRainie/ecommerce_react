import React, {Component} from 'react'
import PropTypes from 'prop-types';
import MenuItem from "../menu-item/menu-item";
// import './directory.scss'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory-selector'
import {createStructuredSelector} from "reselect";
import {Grid,GridList,GridListTile} from '@material-ui/core/'
import Container from "@material-ui/core/Container";
import './directory.scss'


const Directory =({sections}) => {
    const num = 1
        return (
            <div className='directory-menu' >
                {/*<Grid container direaction='row' justify='space-around' spacing={1} xs={3}>*/}
                {sections.map(({title, imageUrl, id,size, linkUrl}) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                })}
                {/*</Grid>*/}
            </div>
        );
    }


const mapStateTpProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateTpProps)(Directory);
