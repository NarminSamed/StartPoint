
// 2ci version
// i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         debug: true,
//         fallbackLng: 'en',
//         interpolation: {
//             escapeValue: false,
//         },
//         resources: {
//             en: {
//                 translation: {
//                     description: {
//                         part1: 'Edit <1>src/App.js</1> and save to reload.',
//                         part2: 'Learn React'
//                     }
//                 }
//             },
//             de: {
//                 translation: {
//                     description: {
//                         part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
//                         part2: 'Lerne React'
//                     }
//                 }
//             }
//         }
//     });

// export default i18n


import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationAZ from '../src/translations/az/translation.json'
import translationEN from '../src/translations/eng/translation.json'
import translationRUS from '../src/translations/rus/translation.json'
// the translations
const resources = {
  az: {
    translation: translationAZ
  },
  eng: {
    translation: translationEN
  },
  rus: {
    translation: translationRUS
  }
};

i18n
.use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;