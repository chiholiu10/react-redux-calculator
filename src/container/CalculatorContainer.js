import React from "react";
import { connect } from "react-redux";
import { MinusBtn, NumberBtn, PlusBtn, Result, DivideBtn, TimesBtn, ClearBtn, CalculatorScreen} from '../components'; 

const CalculatorContainer = () => {
  return (
    <div>
      <CalculatorScreen/>
      <NumberBtn/>
      <MinusBtn/>
      <PlusBtn/>
      <Result/>
      <DivideBtn/>
      <TimesBtn/>
      <ClearBtn/>
    </div>
  )
}

export default connect(
)(CalculatorContainer);
