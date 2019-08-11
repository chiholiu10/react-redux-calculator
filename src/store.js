import { createStore } from 'redux';
import calcReducer from './reducers/CalculatorReducers';

const store = createStore(calcReducer);

export default store;