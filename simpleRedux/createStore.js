const createStore = (reducers, initialState) => {
    let state = initialState || {};
    let listener = () => {};
    
    const getState = () => state;

    const dispatch = (action) => {
        // combination function for combineReducers
        state = reducers(state, action);
        listener(state);
    }

    const subscribe = cb => {
        listener = cb;
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export { createStore }