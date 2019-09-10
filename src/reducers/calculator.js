import { types } from '../actions/index';

const initialState = {
    value: 0,
    history: "0",
    numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],   
    divide: [ "/" ],
    reset: ["C"],
    minus: ["-"],
    multiply: ["*"],
    result: ["="],
    dot: ["."],
    plus: ["+"],
    display: '0',
    prevOp: "",
    accumulated: "0",
}

export const calculator = (state = initialState, action) => {
    
    switch (action.type) {
        case types.INPUT_NUMBER:
            const updateDisplay = action.payload;
            console.log('click')
            if((state.display.includes('.') && updateDisplay.input === ".") || state.display.length > 8) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    display: state.display === "0" || state.prevOp === "operator" ? updateDisplay.input : state.display + updateDisplay.input,
                    prevOp: updateDisplay.operation
                }
            }
           

        case types.PLUS:
            return {
                ...state,
                value: state.value
            }
        case types.DIVIDE:
            console.log('divide');
            return {
                ...state,
                value: state.value
            }
        case types.TIME:
            console.log('time');
            return {
                ...state,
                value: state.value
            }

        case types.MINUS:   
            console.log('minus')
            return {
                ...state,
                value: state.value
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