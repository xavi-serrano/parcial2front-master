import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import localeEs from "./locales/es.json";
import localeEn from "./locales/en.json";


let messages = null;
if(navigator.language === "en"){
  messages = localeEn;
}else{
  messages = localeEs;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={navigator.language} messages={messages}>
    <App />
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
