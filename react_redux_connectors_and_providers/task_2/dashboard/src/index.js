import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import uiReducer from './reducers/uiReducer.js';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const store = createStore(uiReducer, applyMiddleware(thunk));

// Vérifier et rendre l'application principale
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(
        <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </Provider>,
        rootElement
    );
} else {
    console.error('Failed to find the root element');
}
