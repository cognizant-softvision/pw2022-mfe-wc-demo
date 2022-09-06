import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './App';
import { BrowserRouter } from 'react-router-dom';

import "./App.css";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);
