import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faArrowRight, faArrowLeft);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
