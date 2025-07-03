"use client"

import "../styles/globals.css"
import type React from "react"
import { useEffect, useState, Suspense, lazy } from "react"
import { useTranslation } from "react-i18next"
import i18n from "./i18n"
import { LanguageSwitcher } from "./components/UI/LanguageSwitcher/LanguageSwitcher"

const RickAndMortyCharacters = lazy(() => import("rickandmortymf/CharacterList"))
const HarryPotterCharacters = lazy(() => import("harrypottermf/CharacterList"))

const App: React.FC = () => {
  const { t } = useTranslation()
  const [showRick, setShowRick] = useState(false)
  const [showHarry, setShowHarry] = useState(false)
  const [ready, setReady] = useState(false)
  // Estado para forzar re-render al cambiar idioma
  const [currentLang, setCurrentLang] = useState(i18n.language)

  useEffect(() => {
    const onLangChanged = (lng: string) => setCurrentLang(lng)
    const onInitialized = () => setReady(true)

    i18n.on("languageChanged", onLangChanged)
    i18n.on("initialized", onInitialized)

    if (i18n.isInitialized) setReady(true)

    return () => {
      i18n.off("languageChanged", onLangChanged)
      i18n.off("initialized", onInitialized)
    }
  }, [])

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  if (!ready) return null

  return (
    <div key={i18n.language}
      style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "20px" }}
    >
      <header style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>{t("app.title")}</h1>
        <p style={{ fontSize: "1.2rem" }}>{t("app.subtitle")}</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "24px 0" }}>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "12px 24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#fff"
          }}>
            <LanguageSwitcher language={i18n.language} onLanguageChange={handleLanguageChange} label={t("language.switch")} />
          </div>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <section
          style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "30px", marginBottom: "30px" }}
        >
          <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>🛸 {t("characters.rickAndMorty")}</h2>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => setShowRick(!showRick)}
              style={{
                background: showRick ? "#dc3545" : "#28a745",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {showRick ? t("button.hideCharacters") : t("button.showCharacters")}
            </button>
          </div>
          {showRick && (
            <Suspense fallback={<div style={{ textAlign: "center", color: "white" }}>{t("loading")}</div>}>
              <RickAndMortyCharacters language={i18n.language} />
            </Suspense>
          )}
        </section>

        <section style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "30px" }}>
          <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>⚡ {t("characters.harryPotter")}</h2>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => setShowHarry(!showHarry)}
              style={{
                background: showHarry ? "#dc3545" : "#6f42c1",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {showHarry ? t("button.hideCharacters") : t("button.showCharacters")}
            </button>
          </div>
          {showHarry && (
            <Suspense fallback={<div style={{ textAlign: "center", color: "white" }}>{t("loading")}</div>}>
              <HarryPotterCharacters language={i18n.language} />
            </Suspense>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
