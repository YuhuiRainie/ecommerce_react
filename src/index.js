import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store,persistor} from'./redux/store';
import {PersistGate} from "redux-persist/integration/react";
import CartProvider from "./provider/cart.provider";


ReactDOM.render(
    <CartProvider>
        <Provider store={store} >
            <HashRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </HashRouter>
        </Provider>
    </CartProvider>
  ,
  document.getElementById('root')
);


