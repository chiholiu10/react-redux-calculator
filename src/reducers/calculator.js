import { types } from '../actions/index';

const initialState = {
    value: 0,
<<<<<<< HEAD
    history: 0,
    comma: [","],
    toggle: false,
=======
    history: [],
>>>>>>> b573293b3b76a3427b31b3921a1f8a66f1911d37
    numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],   
    divide: [ "/" ],
    reset: ["C"],
    minus: ["-"],
    multiply: ["*"],
    result: ["="],
    dot: ["."],
    plus: ["+"],
    space: [" "],
    tempArray: []
}

export const calculator = (state = initialState, action) => {
<<<<<<< HEAD

=======
    
>>>>>>> b573293b3b76a3427b31b3921a1f8a66f1911d37
    switch (action.type) {
        case types.INPUT_NUMBER:
            console.log(state.value)
            return {
                ...state,
                value: state.value === 0 ? action.number : state.value + action.number
            }

        case types.PLUS:
<<<<<<< HEAD
            console.log(state.value)
            return {
                ...state,
                value: state.value
=======
            console.log(state.value);
            return {
                ...state,
                value: state.value.concat(action.plus)
>>>>>>> b573293b3b76a3427b31b3921a1f8a66f1911d37
            }
        case types.DIVIDE:
            return {
                ...state,
                value: state.value.concat(action.divide)
            }
        case types.TIME:
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
            return {
                ...state,
                value: state.value
            }
        default: 
            return state;
    }
};

export default calculator;