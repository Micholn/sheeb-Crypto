import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import "@fortawesome/fontawesome-free/js/all";
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
reportWebVitals();