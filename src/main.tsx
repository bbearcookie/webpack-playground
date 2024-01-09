import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
