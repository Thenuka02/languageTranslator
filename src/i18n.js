// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';


// i18n
  
//   .use(LanguageDetector)
  
//   .use(initReactI18next)
  
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false, 
//     },
//     resources: {
//       en: {
//         translation: {
//           description: {
//             part1: "Hello, welcome to Home page!!",
           
//           }
//         }
//       },
//       fr: {
//         translation: {
//           description: {
//             part1: "Bonjour, bienvenue sur la page d'accueil!!"
           
//           }
//         }
//       },
//       ta: {
//         translation: {
//           description: {
//             part1: "வணக்கம், முகப்புப் பக்கத்திற்கு வரவேற்கிறோம்!!",
           
//           }
//         }
//       },
//       cn: {
//         translation: {
//           description: {
//             part1: "您好，歡迎來到首頁！！",
           
//           }
//         }
//       },
//     }
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageTranslation_en from "./translations/en/languageTranslation.json";
import languageTranslation_fr from "./translations/fr/languageTranslation.json";
import languageTranslation_ta from "./translations/ta/languageTranslation.json";

i18n
  
  .use(LanguageDetector)
  
  .use(initReactI18next)
  
  .init({
    lng: 'en',     
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
       
           languageTranslation: languageTranslation_en
           
          },
        
      fr: {
        
          languageTranslation: languageTranslation_fr
            
          },
      ta: {
        
          languageTranslation: languageTranslation_ta
                
          },    
      
    }
  
  });

export default i18n;