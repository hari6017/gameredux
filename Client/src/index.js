import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App.js';
import allReducers from './reducers/index.js';

const Store = createStore(allReducers);
ReactDom.render(<Provider store = {Store}>
              <App />
                </Provider>,document.getElementById('app'));
