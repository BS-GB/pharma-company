import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"


import "./index.css"
import "./styles/animations.css"
import "./styles/utilities.css"
import "./styles/hero.css"
import "./styles/home-sections.css"

import { ThemeProvider } from "./context/ThemeContext.jsx"
import { LanguageProvider } from "./context/LanguageContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
