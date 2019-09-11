import { types } from '../actions/index';

const initialState = {
    value: 0,
<<<<<<< HEAD
    history: "0",
=======
    history: 0,
    comma: [","],
    toggle: false,
>>>>>>> 4efef060d361f2be6bc1f5951b1dfba4d16c4984
    numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],   
    divide: [ "/" ],
    reset: ["C"],
    minus: ["-"],
    multiply: ["*"],
    result: ["="],
    dot: ["."],
    plus: ["+"],
<<<<<<< HEAD
    display: '0',
    prevOp: "",
    accumulated: "0",
=======
    space: [" "],
    tempArray: []
>>>>>>> 4efef060d361f2be6bc1f5951b1dfba4d16c4984
}

export const calculator = (state = initialState, action) => {
    switch (action.type) {
        case types.INPUT_NUMBER:
            const updateDisplay = action.payload;
            
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
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            return {
                ...state,
                display: state.display,
                history: state.history == "0" && state.accumulated == "0" ? state.display + " + " : state.accumulated != "0" ? state.accumulated + " + " : history() + state.display + " + ",
                prevOp: "operator"
            }
          
        case types.DIVIDE:
            console.log('divide');

            return {
                ...state
            }
        case types.TIME:
            return {
                ...state
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
                ...state
            }
        case types.OUTPUT_RESULT: 
            let states = state.history + state.display;
            let maths = eval(states);

            return {
                ...state,
                history: maths.toString(),
                display: maths.toString(),
                accumulated: maths.toString(),
                prevOp: "equal"
            }
        default: 
            return state;
    }
};

export default calculator;