import React from 'react';
import { connect } from 'react-redux';
import { onTimesClick } from '../actions';

const TimesBtn = ({ timesBtn, onTimesClick }) => {
    let minus = timesBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => onTimesClick(btn)}>
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
    onTimesClick: minus => dispatch(onTimesClick(minus))
})

const mapStateToProps = state => ({
    timesBtn: state.calculator.multiply
})

export default connect(mapStateToProps, mapDispatchToProps)(TimesBtn);