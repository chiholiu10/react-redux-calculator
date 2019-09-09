import React from 'react';
import { connect } from 'react-redux';

const CalculatorScreen = ({value}) => {
    return (
        <div className="screen">
            {value }
        </div>
    )
}

const mapStateToProps = state => ({
    value: state.calculator.value
});

export default connect(mapStateToProps, null)(CalculatorScreen)