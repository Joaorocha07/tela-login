import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global-styles.css';
import { Provider } from 'react-redux';
import Routes from './routes/AppRoutes';
import store from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
);
