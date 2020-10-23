import { createStore } from '../simpleRedux/createStore.js';
import { combineReducers } from '../simpleRedux/combineReducers.js';
import {
    amountReducer,
    charReducer
} from '../simpleRedux/reducers.js';
import { initDOMElements } from './DOMevents.js';

const store = createStore(combineReducers({
    amountReducer,
    charReducer
}), {});

window.store = store;

initDOMElements(store);

