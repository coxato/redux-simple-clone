const combineReducers = reducersObj => {
    const reducersNames = Object.keys(reducersObj);

    // return a function that iterate for all reducers 
    return (state, action) => {

        let hasChanged = false;
        let nextState = {};

        for(let reducerName of reducersNames){
            // if state[reducerName] is undefined, take the default initialState for the reducer
            //  or just return undefined 
            nextState[reducerName] = reducersObj[reducerName](state[reducerName], action);
            // check if the state changed in this reducer or in the previous reducer call
            hasChanged = hasChanged || state[reducerName] !== nextState;
        }
        
        return hasChanged ? nextState : state;
    }
}

export {
    combineReducers
}