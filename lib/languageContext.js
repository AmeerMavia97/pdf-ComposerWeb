"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { getDictionary } from "./dictionaries"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("en")
  const [dict, setDict] = useState(null)
  const [loading, setLoading] = useState(true)

  const loadLanguage = async (lang) => {
    try {
      const dictionary = await getDictionary(lang)
      setDict(dictionary)
      setCurrentLang(lang)
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", lang)
      }
    } catch (error) {
      console.error("Error loading dictionary:", error)
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    // Get language from URL first, then localStorage, then default to English
    const currentPath = window.location.pathname

    let urlLang = null
    if (currentPath.startsWith("/es")) {
      urlLang = "es"
    } else if (currentPath.startsWith("/ar")) {
      urlLang = "ar"
    }

    // Priority: URL language > saved language > default English
    const savedLang = localStorage.getItem("selectedLanguage")
    const initialLang = urlLang || savedLang || "en"

    loadLanguage(initialLang).finally(() => setLoading(false))
  }, [])

  const changeLanguage = (newLang) => {
    loadLanguage(newLang)
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        dict,
        loading,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
