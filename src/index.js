import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ZAFClient from './services/ZAFClient';

function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
      </React.StrictMode>,
    document.getElementById('app'));
}

document.addEventListener('DOMContentLoaded', () => {
  ZAFClient.events.on_app_registered((initApp));
});