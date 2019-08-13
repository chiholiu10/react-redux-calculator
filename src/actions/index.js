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
    number
});

export const onPlusClick = plus => ({
    type: types.PLUS,
    plus
});

export const onDivideClick = divide => ({
    type: types.DIVIDE,
    divide
});

export const onTimesClick = time => ({
    type: types.TIME,
    time
});

export const onMinusClick = minus => ({
    type: types.MINUS,
    minus
});

export const onClearClick = clear => ({
    type: types.CLEAR,
    clear
});

export const outputClick = output => ({
    type: types.OUTPUT_RESULT,
    output
});