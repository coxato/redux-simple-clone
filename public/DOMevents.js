import { INCREMENT, DECREMENT, NEXTCHAR } from '../simpleRedux/types.js';

const id = (_id) => document.getElementById(_id);
// html elements
const amountContainer = id('amount'),
incrementBtn = id('add'),
decrementBtn = id('remove'),
characterContainer = id('character'),
nextCharBtn = id('nextChar'),
getStateBtn = id('getState');


// add listeners
function initDOMElements(store) {
    // increment
    incrementBtn.addEventListener('click', () => {
        store.dispatch({ type: INCREMENT });
        const { amount } = store.getState().amountReducer;
        amountContainer.textContent = amount;
    })

    // decrement
    decrementBtn.addEventListener('click', () => {
        store.dispatch({ type: DECREMENT });
        const { amount } = store.getState().amountReducer;
        amountContainer.textContent = amount;
    })

    // next char
    nextCharBtn.addEventListener('click', () => {
        store.dispatch({ type: NEXTCHAR });
        const { char, code } = store.getState().charReducer;
        characterContainer.textContent = `${char}, ${code}`;
    })

    // get state
    getStateBtn.addEventListener('click', () => {
        console.log(store.getState());
    })

    
}

export {
    initDOMElements
}