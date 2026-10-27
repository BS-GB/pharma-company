// 1. استيراد الصورة في أول سطر ليتولى Vite ضغطها وتضمينها تلقائياً
import alraidahLogo from "../assets/logo/alraidah-logo.jpg";

export const siteConfig = {
  name: {
    ar: "الرائدة",
    en: "AL-Raidah",
  },

  fullName: {
    ar: "الرائدة للأدوية",
    en: "AL-Raidah Pharmaceutical",
  },


  logo: alraidahLogo,

  colors: {
    primary: "#189AD0",
    secondary: "#FFFFFF",
  },

  defaultLanguage: "ar",
  defaultTheme: "light",
  supportedLanguages: ["ar", "en"],
  supportedThemes: ["light", "dark"],

  direction: {
    ar: "rtl",
    en: "ltr",
  },
};