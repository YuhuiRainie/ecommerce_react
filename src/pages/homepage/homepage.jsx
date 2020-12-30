import React from 'react';
import './homepage.scss'
import Directory from "../../components/directory/directory";
import MenuItem from "../../components/menu-item/menu-item";


const Homepage = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
};

export default Homepage;
