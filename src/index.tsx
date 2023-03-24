import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faImage, faArrowUpRightFromSquare, faList, faGrip } from '@fortawesome/free-solid-svg-icons';

library.add(faImage, faArrowRight, faArrowUpRightFromSquare, faList, faGrip);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
