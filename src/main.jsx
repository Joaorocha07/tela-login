import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global-styles.css';
import Routes from './routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
