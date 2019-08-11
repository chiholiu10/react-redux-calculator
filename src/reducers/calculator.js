import * as actionTypes from "../utils/actionTypes";

const initialState = {
    inputValue: 0,
    resultValue: 0,
    showingResult: false
};

const calculator = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_NUMBER:
            return {
                ...state,
                inputValue: state.inputValue * 10 + action.number,
                showingResult: false
            }
        case actionTypes.PLUS:
            return {
                ...state,
                inputValue: 0,
                resultValue: state.resultValue + state.inputValue,
                showingResult: true
            }
        case actionTypes.DIVIDE:
            console.log(state.inputValue, state.resultValue)
            return {
                ...state,
                inputValue: (state.resulValue === 0) ? 0 : state.resultValue,
                resultValue: (state.resultValue > 0) ? state.resultValue : state.resultValue / state.inputValue,
                showingResult: true
            };
        case actionTypes.TIME:
            return {
                ...state,
                inputValue: 1,
                resultValue: state.resultValue * state.inputValue,
                showingResult: true
            };
        case actionTypes.MINUS:
            return {
                ...state,
                inputValue: 0,
                resultValue: state.resultValue - state.inputValue,
                showingResult: true
            };
        default: 
            return state;
    }
};

export default calculator;