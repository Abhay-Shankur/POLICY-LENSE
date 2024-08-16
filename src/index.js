// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import ButtonAppBar from './components/AppBar';

ReactDOM.render(
  <Provider store={store}>
  
    <ButtonAppBar/>
    <App />
  </Provider>,
  document.getElementById('root')
);
