import React from 'react';
import { connect } from 'react-redux';
import { outputClick } from '../actions';

const Result = ({ outputBtn, outputClick }) => {
    let result = outputBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => outputClick(btn)}>
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
    outputClick: result => dispatch(outputClick(result))
});

const mapStateToProps = state => ({
    outputBtn: state.calculator.result
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);