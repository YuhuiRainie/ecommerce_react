
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import Checkout from "./pages/checkout/checkout";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user-action";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";


class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        // monitoring the auth state
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id:snapShot.id,
                            ...snapShot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }


        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
    return (
        <div className="App">

                <Header />
                <Switch>
                    <Route  exact path='/' component={Homepage} />
                    <Route  path='/shop' component={Shop} />
                    <Route  exact path='/checkout' component={Checkout} />
                    <Route  exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/' />):(<SignInSignUp />) } />
                    <Route  exact path='/*' component={Homepage} />
                </Switch>

        </div>
);
}

}

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
