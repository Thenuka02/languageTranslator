import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageTranslation_en from "./translations/en/languageTranslation.json";
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
      ta: {
        
          languageTranslation: languageTranslation_ta
                
          },    
      
    }
  
  });

export default i18n;