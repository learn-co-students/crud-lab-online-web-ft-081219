import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurantsAndReviews from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurantsAndReviews)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
