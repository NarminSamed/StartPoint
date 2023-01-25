import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import '../src./i18n'  

import '../src/i18n'

import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
    <App />
    </React.Suspense>
  </React.StrictMode>
);

serviceWorker.unregister();