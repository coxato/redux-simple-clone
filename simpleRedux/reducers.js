import { INCREMENT, DECREMENT, NEXTCHAR } from './types.js';

// ===== reducers =====
const amountInitial = { amount: 0 }
const amountReducer = (state = amountInitial, action) => {
    switch (action.type) {
        case INCREMENT:
            return { amount: state.amount + 1 }
        
        case DECREMENT:
            return { amount: state.amount - 1 }
    
        default:
            return state;
    }
}

const characterInitial = { char: 'A', code: 97 }
const charReducer = (state = characterInitial, action) => {
    switch (action.type) {
        case NEXTCHAR:
            return { char: String.fromCharCode(state.code + 1), code: state.code + 1 }
    
        default:
            return state;
    }
}

export {
    amountReducer,
    charReducer
}