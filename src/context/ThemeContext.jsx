import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

const STORAGE_KEY = "alraidah-theme"

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme
    }

    return "light"
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle("dark", theme === "dark")
    root.style.colorScheme = theme

    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      "useThemeContext must be used inside ThemeProvider",
    )
  }

  return context
}
