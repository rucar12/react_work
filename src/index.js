import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icons.min.css'



//Localisaton
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en','de','ua', 'ru'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },


    });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

