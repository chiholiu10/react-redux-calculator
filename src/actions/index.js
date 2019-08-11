export const types = {
    INPUT_NUMBER: 'INPUT_NUMBER',
    PLUS: 'PLUS',
    DIVIDE: 'DIVIDE',
    TIME:'TIME',
    MINUS: 'MINUS'
}

export const onNumClick = number => ({
    type: types.INPUT_NUMBER,
    number
})
export const onPlusClick = () => ({
  type: types.PLUS
})

export const onDivideClick = () => ({
    type: types.DIVIDE
})

export const onTimeClick = () => ({
    type: types.TIME
})

export const onMinusClick = () => ({
    type: types.MINUS
})