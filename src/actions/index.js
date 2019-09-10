export const types = {
    INPUT_NUMBER: 'INPUT_NUMBER',
    PLUS: 'PLUS',
    DIVIDE: 'DIVIDE',
    TIME:'TIME',
    MINUS: 'MINUS',
    CLEAR: 'CLEAR',
    OUTPUT_RESULT: 'OUTPUT_RESULT'
}

export const onNumClick = number => ({
    type: types.INPUT_NUMBER,
    payload: {
        input: number,
        operation: "num"
    }
});

export const onPlusClick = plus => ({
    type: types.PLUS,
    payload: {
        operation: plus
    }
});

export const onDivideClick = divide => ({
    type: types.DIVIDE,
    payload: {
        operation: divide
    }
});

export const onTimesClick = time => ({
    type: types.TIME,
    payload: {
        operation: time
    }
   
});

export const onMinusClick = minus => ({
    type: types.MINUS,
    payload: {
        operation: minus
    }
});

export const onClearClick = clear => ({
    type: types.CLEAR,
    payload: {
        operation: clear
    }

});

export const outputClick = output => ({
    type: types.OUTPUT_RESULT,
    payload: {
        operation: output
    }
});