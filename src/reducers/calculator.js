import { types } from '../actions/index';

const initialState = {
    value: 0,
    history: "0",
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
    display: "0",
    accumulated: "0",
    prevOp: "",
    checkClick: false
}

export const calculator = (state = initialState, action) => {
    
    switch (action.type) {
        case types.INPUT_NUMBER:
            const updateDisplay = action.payload;
            let history;

            if((state.display.includes('.') && updateDisplay.input === ".") || state.display.length > 8 || state.checkClick ) {
                return {
                    ...state
                }
            }  else {
                return {
                    ...state,
                    display: state.display == '0' || state.prevOp === "operator" ? updateDisplay.input : state.display + updateDisplay.input,
                    prevOp: updateDisplay.operation
                }
            }
           
        case types.PLUS:
            history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            console.log('plus');
            return {
                ...state,
                display: state.display,
                history: state.history == '0' && state.accumulated == "0" ? state.display + " + " : state.accumulated !== "0" ? state.accumulated + " + " : history() + state.display + " + ",
                prevOp: "operator",
                checkClick: false
            }

        case types.DIVIDE:
            history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            console.log('clicked');
            return {
                ...state,
                display: state.display,
                history: state.history == '0' && state.accumulated == "0" ? state.display + " / " : state.accumulated !== "0" ? state.accumulated + " / " : history() + state.display + " / ",
                prevOp: "operator", 
                checkClick: false
            }

        case types.TIME:
            history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;

            return {
                ...state,
                display: state.display,
                history: state.history == '0' && state.accumulated == "0" ? state.display + " * " : state.accumulated !== "0" ? state.accumulated + " * " : history() + state.display + " * ",
                prevOp: "operator",
                checkClick: false
            }
            
        case types.MINUS:   
            history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            
            return {
                ...state,
                display: state.display,
                history: state.history == '0' && state.accumulated == "0" ? state.display + " - " : state.accumulated != "0" ? state.accumulated + " - " : history() + state.display + " - ",
                prevOp: "operator",
                checkClick: false
            }

        case types.CLEAR: 
            return {
                ...state
            }

        case types.OUTPUT_RESULT: 
            let states = state.history + state.display;
            let maths = eval(states);

            if(state.checkClick == true) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    history: maths.toString(),
                    display: maths.toString(),
                    accumulated: maths.toString(),
                    prevOp: "equal",
                    checkClick: true
                }
            }

        default: 
            return state;
    }
};

export default calculator;