import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from "redux-persist";
import thunk from 'redux-thunk';
import saga from 'redux-saga'

// const sagaMiddleware = [sagaMiddleware]
const middlewares = [thunk];
if(process.env.NODE_ENV ==='development'){
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// sagaMiddleware.run
export const persistor = persistStore(store)
export default  { store,persistor};
