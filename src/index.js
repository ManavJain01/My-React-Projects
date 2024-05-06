import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter, createHashRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Users from './All Projects/MainFile/components/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Users />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();