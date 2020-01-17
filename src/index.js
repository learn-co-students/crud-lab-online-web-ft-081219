import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import combinedReducer from './reducers'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(combinedReducer, composeEnhancers())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
