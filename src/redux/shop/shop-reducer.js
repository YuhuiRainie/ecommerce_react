import DATA from './data'

const INITIAL_STATE = {
    collections:DATA
}

 const shopReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        default:
            return state;
    }
}

export default  shopReducer;
