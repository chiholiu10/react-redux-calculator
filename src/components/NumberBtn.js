import React from 'react';
import { connect } from 'react-redux';
import { onNumClick } from '../actions';

const NumberBtn = ({ numberBtns, onNumClick }) => {
    let calcButtons = numberBtns.map((btns, index) => {
        return (
          <div key={index} onClick={() => onNumClick(btns)}>
            { btns }
          </div>
        )
    });
    
    return (
      <div>
        { calcButtons }
      </div>
    )
}
const mapDispatchToProps = dispatch => ({
    onNumClick: number => dispatch(onNumClick(number))
})

const mapStateToProps = state => {
    return {
        numberBtns: state.calculator.numbers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberBtn);