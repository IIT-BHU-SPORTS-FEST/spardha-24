import React from 'react';
import { createRoot } from 'react-dom/client';  // ✅ new import
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root'); 
const root = createRoot(container); // ✅ create a root

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
