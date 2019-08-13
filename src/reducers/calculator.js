import { types } from '../actions/index';

const initialState = {
    value: 0,
    symbol: [],
    numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],   
    divide: [ "/" ],
    reset: ["C"],
    minus: ["-"],
    multiply: ["*"],
    result: ["="],
    dot: ["."],
    plus: ["+"]
}

export const calculator = (state = initialState, action) => {
    const temporaryStore = state.value;
    switch (action.type) {
        case types.INPUT_NUMBER:
            return {
                ...state,
                value: state.value === 0 ? action.number : state.value + action.number
            }

        case types.PLUS:
            console.log('plus');
            return {
                ...state
            }
        case types.DIVIDE:
            console.log('divide');
            return {
                ...state
            }
        case types.TIME:
            console.log('time');
            return {
                ...state
            }

        case types.MINUS:
            console.log(action.minus)
            return {
                ...state,
                symbol: action.minus
            }
        case types.CLEAR: 
            console.log('clear');
            return {
                ...state,
                value: 0
            }
        case types.OUTPUT_RESULT: 
            console.log('result');
            return {
                ...state
            }
        default: 
            return state;
    }
};

export default calculator;