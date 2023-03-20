import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

import 'normalize.css';
import './styles/style.css';
import './styles/numberHeadings.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter>
  </React.StrictMode>
);
// basename="/40k-bolt-action-react-app"