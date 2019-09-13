import React from 'react';
import { connect } from 'react-redux';
import { onDivideClick } from '../actions';

const DivideBtn = ({ divideBtn, onDivideClick }) => {
    let result = divideBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => onDivideClick(btn)}>
                {btn}
            </div>
        )
    })

    return (
        <div>
            {result}
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    onDivideClick: result => dispatch(onDivideClick(result))
});

const mapStateToProps = state => ({
    divideBtn: state.calculator.divide
});

export default connect(mapStateToProps, mapDispatchToProps)(DivideBtn);