import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faImage, faArrowUpRightFromSquare, faList, faGrip } from '@fortawesome/free-solid-svg-icons';
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import common_en from "./translations/en/common.json";
import common_pl from "./translations/pl/common.json";

library.add(faImage, faArrowRight, faArrowUpRightFromSquare, faList, faGrip);

i18next.init({
    interpolation: { escapeValue: false },
    lng: "pl",
    resources: {
        en: {
            common: common_en
        },
        pl: {
            common: common_pl
        }
    }
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
