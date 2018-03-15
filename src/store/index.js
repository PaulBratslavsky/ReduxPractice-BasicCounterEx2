import { createStore } from 'redux';

// SET INITIAL STATE FOR APP
const initialState = {
    count: 10,
};

// REDUCER TAKES STATE AND ACTION AS ARGUMENTS
const reducer = (state = initialState, action) => {
    console.log('REDUCER:', action);

    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1 });
        default: 
        return state;
    }
}

// CREATE STRORE
const store = createStore(reducer);

export default store;