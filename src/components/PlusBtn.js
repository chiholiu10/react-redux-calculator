import React from 'react';
import { connect } from 'react-redux';
import { onPlusClick } from '../actions';

const PlusBtn = ({ plusBtn, onPlusClick}) => {
    let plus = plusBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => onPlusClick()}>
                { btn }
            </div>
        )
    })

    return (
        <div>
            { plus }
        </div>
    )
} 

const mapDispatchToProps = dispatch => {
    return {
        onPlusClick: () => dispatch(onPlusClick())
    }
}

const mapStateToProps = state => {
    return {
        plusBtn: state.calculator.plus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusBtn);