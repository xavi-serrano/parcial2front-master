import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from './locales/span';
import localeEnMessages from './locales/engl';
import { IntlProvider } from 'react-intl';


// conseguir el idioma del navegador
// const locale = navigator.language;
// conseguir el idioma del navegador
const locale = navigator.language.split(/[-_]/)[0];

// elegir los mensajes a usar
let traduccion;
if (locale === "es") {
  traduccion = localeEsMessages;
} else {
  traduccion = localeEnMessages;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider messages={traduccion}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
