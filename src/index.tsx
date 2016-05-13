import * as React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configure-store';


const store: Redux.Store = configureStore();
const mainElement: HTMLElement = document.getElementById('main');


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mainElement
)
