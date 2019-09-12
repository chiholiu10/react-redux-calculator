import { types } from '../actions/index';

const initialState = {
    value: 0,
    comma: [","],
    toggle: false,
    numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],   
    divide: [ "/" ],
    reset: ["C"],
    minus: ["-"],
    multiply: ["*"],
    result: ["="],
    dot: ["."],
    plus: ["+"],
    space: [" "],
    tempArray: [],
    display: 0,
    prevOp: "",
    accumulated: "0",
    history: '0'
}

export const calculator = (state = initialState, action) => {
    
    switch (action.type) {
        case types.INPUT_NUMBER:
            return {
                ...state,
                value: state.value === 0 ? action.number : state.value.indexOf(0) === 0 ? '' : state.value + action.number
            }

        case types.PLUS:
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            return {
                ...state,
                history: state.value
            }

        case types.DIVIDE:
            return {
                ...state,
                value: state.value + action.divide 
            }

        case types.TIME:
            return {
                ...state,
                value: state.value + action.time
            }
            
        case types.MINUS:   
            return {
                ...state,
                value: state.value + action.minus
            }

        case types.CLEAR: 
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