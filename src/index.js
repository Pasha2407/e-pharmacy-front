import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { App } from './components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/e-pharmacy-front'>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

