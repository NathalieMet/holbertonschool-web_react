import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));

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
