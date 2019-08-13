import React from 'react';
import { connect } from 'react-redux';
import { onMinusClick } from '../actions';

const MinusBtn = ({ minusBtn, onMinusClick }) => {
    let minus = minusBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => onMinusClick(btn)}>
                {btn}
            </div>
        )
    })

    return (
        <div>
            {minus}
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    onMinusClick: minus => dispatch(onMinusClick(minus))
})

const mapStateToProps = state => ({
    minusBtn: state.calculator.minus
})

export default connect(mapStateToProps, mapDispatchToProps)(MinusBtn);