import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "./i18n"

import i18next from "i18next"

import global_en from "./translation/en/global.json"
import global_ar from "./translation/ar/global.json"
import { I18nextProvider } from 'react-i18next';

i18next.init({
  fallbackLng: 'en',
  debug: true,
  lng : "en",
  resources : {
    en:{
      global: global_en,
    },
    ar:{
      global: global_ar,
    }
  },
  interpolation: {escapeValue: false, // not needed for react as it escapes by default
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* RUN THE APP INSIDE I18nextProvider */}
  {/* THEN WILL PASS I18NEXT AS OBJECT IN i18 */}
    <I18nextProvider i18n={i18next} >
        <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();












// import React, { Component } from "react";
// import { createRoot } from 'react-dom/client';
// import App from './App';

// import i18n (needs to be bundled ;)) 
// import './i18n';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <App />
// );