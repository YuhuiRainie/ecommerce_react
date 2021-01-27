import React from 'react';
import './homepage.scss'
import Directory from "../../components/directory/directory";
import MenuItem from "../../components/menu-item/menu-item";
import Container from '@material-ui/core/Container';

const Homepage = () => {
    return (
        <Container maxWidth='lg' className='homepage'>
            <Directory />
        </Container>
    );
};

export default Homepage;
