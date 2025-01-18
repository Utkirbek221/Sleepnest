// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from '../I18n/ru/translation.json';
import translationUZ from '../I18n/uz/translation.json';
import translationEN from '../I18n/en/translation.json';


const resources = {
    uz: {
        translation: translationUZ,
    },
    ru: {
        translation: translationRU, 
    },
    en: {
        translation: translationEN, 
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru', 
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
