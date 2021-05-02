import React, {useContext, useState} from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import { ReactComponent as Logo} from "../../assert/logo.svg";
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {createStructuredSelector} from "reselect";
import {selectHidden} from "../../redux/cart/cart.selector";
import {Hidden,Drawer,Button,Grid,Typography,List,ListItem,Divider,ListItemIcon} from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import CartContext from "../../contexts/cart/cart.context";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const currentUser = useContext(CurrentUserContext)
    const [hidden,setHidden] = useState(true)
    const toggleHidden = () => setHidden(!hidden)
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <Hidden smDown>
            <div className='options'>
                <Link className='option' to='/'>
                    HOME
                </Link>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )}
                <CartContext.Provider value={{hidden,toggleHidden}}>
                <CartIcon/>
                </CartContext.Provider>
            </div>
            {hidden ? null : <CartDropdown/>}
            </Hidden>
            <Hidden mdUp>
                <Grid container direction='row' justify='flex-end' alignItems='center'>
                    <Button onClick={() => setIsMenuOpen(true)}>
                        <DehazeIcon fontSize='large' style={{color: '#7F4F61'}}/>
                    </Button>
                    <Drawer anchor='top' open={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
                        <div className='options'>
                            <List alignItems="center">
                                <ListItem>
                                    <ListItemIcon><HomeIcon /></ListItemIcon>
                                    <Link className='option' to='/' style={{width:'100%'}}>
                                        HOME
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                                    <Link className='option' to='/shop' style={{width:'100%'}}>
                                        SHOP
                                    </Link>
                                </ListItem>
                                <Divider />
                            {currentUser ? (
                                <ListItem>
                                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                    <div className='option' onClick={() => auth.signOut()} style={{width:'100%'}}>
                                        SIGN OUT
                                    </div>
                                </ListItem>

                            ) : (
                                <ListItem>
                                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                    <Link className='option' to='/signin' style={{width:'100%'}}>
                                        SIGN IN
                                    </Link>
                                </ListItem>

                            )}
                            </List>
                        </div>
                    </Drawer>
                </Grid>
            </Hidden>
        </div>
    );
}
const mapStateToProps =createStructuredSelector ({
    hidden:selectHidden
});

export default connect(mapStateToProps)(Header);
