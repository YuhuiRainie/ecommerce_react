
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import Checkout from "./pages/checkout/checkout";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import CurrentUserContext from "./contexts/current-user/current-user.context";

class App extends React.Component{
    constructor() {
        super();
        this.state= {
            currentUser:null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {

        // monitoring the auth state
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser:userAuth})
            }


        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
    return (
        <div className="App">
                <CurrentUserContext.Provider value={this.state.currentUser}>
                    <Header />
                </CurrentUserContext.Provider>
                <Switch>
                    <Route  exact path='/' component={Homepage} />
                    <Route  path='/shop' component={Shop} />
                    <Route  exact path='/checkout' component={Checkout} />
                    <Route  exact path='/signin' render={() => this.state.currentUser? (<Redirect to='/' />):(<SignInSignUp />) } />
                    {/*<Route  exact path='/*' component={Homepage} />*/}
                </Switch>

        </div>
);
}

}


export default App;
