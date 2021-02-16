
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import Checkout from "./pages/checkout/checkout";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import React from 'react';
import {connect} from "react-redux";

import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import {checkUserSession} from "./redux/user/user-action";
import {useEffect} from 'react'
// import {selectItemsForPreview} from "./redux/shop/shop-selector";

const App = ({checkUserSession,currentUser}) => {

    useEffect(() => {checkUserSession()},[checkUserSession])
    // unsubscribeFromAuth = null;

    // componentDidMount() {
        // const {setCurrentUser, collectionsArray} = this.props;

        // monitoring the auth state
        // this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
        //     if(userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth)
        //         userRef.onSnapshot(snapShot => {
        //             setCurrentUser({
        //                     id:snapShot.id,
        //                     ...snapShot.data()
        //             })
        //         })
        //     } else {
        //         setCurrentUser(userAuth)
        //         // move data to firebase
        //         // addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})))
        //     }
        //
        //
        // })
    //     const {checkUserSession} = this.props
    //     checkUserSession()
    // }
    // componentWillUnmount() {
    //     this.unsubscribeFromAuth();
    // }

    // render() {
    return (
        <div className="App">

                <Header />
                <Switch>
                    <Route  exact path='/' component={Homepage} />
                    <Route  path='/shop' component={Shop} />
                    <Route  exact path='/checkout' component={Checkout} />
                    <Route  exact path='/signin' render={() => currentUser? (<Redirect to='/' />):(<SignInSignUp />) } />
                    {/*<Route  exact path='/*' component={Homepage} />*/}
                </Switch>

        </div>
);
// }

}

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    // collectionsArray : selectItemsForPreview
});
const mapDispatchToProps = dispatch => ({
    checkUserSession:() => dispatch(checkUserSession())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
