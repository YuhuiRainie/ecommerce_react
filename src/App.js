
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import React from 'react'


class App extends React.Component{
    constructor(){
        super();
        this.state = {
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
                        currentUser:{
                            id:snapShot.id,
                            ...snapShot.data()
                        }
                    })
                    console.log(this.state)
                })
            } else {
                this.setState({currentUser:userAuth} )
            }


        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route  exact path='/' component={Homepage} />
                    <Route  path='/shop' component={Shop} />
                    <Route  path='/signin' component={SignInSignUp} />
                </Switch>
            </BrowserRouter>
        </div>
);
}

}

export default App;
