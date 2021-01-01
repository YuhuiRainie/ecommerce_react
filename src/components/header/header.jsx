import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assert/crown.svg";
import {auth} from '../../firebase/firebase.utils'

function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='options' to="/shop">SHOP</Link>
                <Link className='options' to="/contact">CONTACT</Link>
                {currentUser?<div className='options' onClick={() => auth.signOut()}>SIGN OUT</div>:<Link className='options' to='/signin'>SIGN IN</Link>}
            </div>
        </div>

    );
}

export default Header;
