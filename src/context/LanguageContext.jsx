import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext(null)

const STORAGE_KEY = "alraidah-language"

const languageConfig = {
  ar: {
    direction: "rtl",
    htmlLang: "ar",
  },

  en: {
    direction: "ltr",
    htmlLang: "en",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY)

    if (savedLanguage === "ar" || savedLanguage === "en") {
      return savedLanguage
    }

    return "ar"
  })

  useEffect(() => {
    const config = languageConfig[language]

    document.documentElement.lang = config.htmlLang
    document.documentElement.dir = config.direction

    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const direction = languageConfig[language].direction

  const isArabic = language === "ar"

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "ar" ? "en" : "ar",
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        direction,
        isArabic,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      "useLanguageContext must be used inside LanguageProvider",
    )
  }

  return context
}
