import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'normalize.css';
import './styles/style.css';
import './styles/numberHeadings.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/40k-bolt-action-react-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
