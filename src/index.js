import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootswatch/dist/quartz/bootstrap.min.css"
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
