import React from "react";
import { connect } from "react-redux";
import { MinusBtn, NumberBtn, PlusBtn, Result, TimesBtn, ClearBtn, CalculatorScreen } from '../components'; 

const CalculatorContainer = () => {
  return (
    <div>
      <NumberBtn/>
      <MinusBtn/>
      <PlusBtn/>
      <Result/>
      <TimesBtn/>
      <ClearBtn/>
      <div>
          <CalculatorScreen/>
      </div>
    </div>
  )
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(CalculatorContainer);
