import { types } from '../actions/index';

const initialState = {
    value: 0,
    history: [],
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
    
    switch (action.type) {
        case types.INPUT_NUMBER:
            console.log(state.value)
            return {
                ...state,
                value: state.value === 0 ? action.number : state.value + action.number
            }

        case types.PLUS:
            console.log(state.value);
            return {
                ...state,
                value: state.value.concat(action.plus)
            }
        case types.DIVIDE:
            console.log('divide');
            return {
                ...state,
                value: state.value.concat(action.divide)
            }
        case types.TIME:
            console.log('time');
            return {
                ...state,
                value: state.value.concat(action.time)
            }

        case types.MINUS:   
            console.log('minus')
            return {
                ...state,
                value: state.value + action.minus
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
                ...state,
                value: state.value
            }
        default: 
            return state;
    }
};

export default calculator;