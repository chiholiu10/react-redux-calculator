import React from 'react';
import { connect } from 'react-redux';
import { onClearClick } from '../actions';

const ClearBtn = ({ clearBtn, onClearClick }) => {
    let clear = clearBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => onClearClick()}>
                { btn }
                Clear
            </div>
        )
    })

    return (
        <div>
            { clear }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onClearClick: ( )=> dispatch(onClearClick())
})  

const mapStateToProps = state => ({
    clearBtn: state.calculator.reset
})

export default connect(mapStateToProps, mapDispatchToProps)(ClearBtn);