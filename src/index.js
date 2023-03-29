import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PacienteProvider from './Context/PacienteProvider';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PacienteProvider>
      <App />
    </PacienteProvider>
  </React.StrictMode>
);
