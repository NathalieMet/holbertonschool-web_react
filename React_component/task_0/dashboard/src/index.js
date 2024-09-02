import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

// Vérifier et rendre les notifications
const notificationsElement = document.querySelector('.root-notifications');
if (notificationsElement) {
    const notificationsRoot = ReactDOM.createRoot(notificationsElement);
    notificationsRoot.render(
        <React.StrictMode>
            <Notifications />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the notifications root element');
}

// Vérifier et rendre l'application principale
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
