import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import calculator from './reducers/index';
import * as serviceWorker from './serviceWorker';
import CalculatorContainer from './container/CalculatorContainer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(calculator);

const App = () => ( 
    <Provider store={store}>
        <CalculatorContainer/>
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register();
