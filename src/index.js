import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "react-auth-kit";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
      authType="cookie"
      cookieName="_auth"
      cookieDomain="localhost"
      cookieSecure={false}
    >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</AuthProvider>
);