"use client"

import "../styles/globals.css"
import type React from "react"
import { useEffect, useState, Suspense, lazy } from "react"
import { useTranslation } from "react-i18next"
import i18n from "./i18n"
import { LanguageSwitcher } from "./components/UI/LanguageSwitcher/LanguageSwitcher"
import { LanguageSwitcherContainer } from "./components/UI/LanguageSwitcher/LanguageSwitcher.styles"
import { Title, Subtitle, DotsBackground, HeaderBackground, PaginationDots, SVGHeaderBackground, SVGSectionBackground, CardSection, ResponsiveMain, SVGBodyDotsBackground } from "./components/UI/Title/Title.styles";
import { Button } from "./components/UI/Button/Button"

const RickAndMortyCharacters = lazy(() => import("rickandmortymf/CharacterList"))
const HarryPotterCharacters = lazy(() => import("harrypottermf/CharacterList"))

const SVG_DOTS_HEADER = (
  <svg viewBox="0 0 1920 340" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <circle cx="200" cy="60" r="6" fill="#bcbcd1" fillOpacity="0.22" />
    <circle cx="400" cy="120" r="5" fill="#bcbcd1" fillOpacity="0.18" />
    <circle cx="700" cy="80" r="7" fill="#bcbcd1" fillOpacity="0.15" />
    <circle cx="1100" cy="60" r="4" fill="#bcbcd1" fillOpacity="0.18" />
    <circle cx="1500" cy="100" r="6" fill="#bcbcd1" fillOpacity="0.22" />
    <circle cx="1700" cy="40" r="5" fill="#bcbcd1" fillOpacity="0.15" />
    <circle cx="300" cy="200" r="4" fill="#bcbcd1" fillOpacity="0.13" />
    <circle cx="900" cy="180" r="6" fill="#bcbcd1" fillOpacity="0.18" />
    <circle cx="1300" cy="220" r="5" fill="#bcbcd1" fillOpacity="0.15" />
    <circle cx="1700" cy="260" r="7" fill="#bcbcd1" fillOpacity="0.13" />
    <circle cx="600" cy="300" r="5" fill="#bcbcd1" fillOpacity="0.13" />
    <circle cx="1600" cy="320" r="4" fill="#bcbcd1" fillOpacity="0.10" />
  </svg>
);

const SVG_DOTS_SECTION = (
  <svg viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <pattern id="dots-section" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="3" fill="white" fillOpacity="0.18" />
      </pattern>
    </defs>
    <rect width="1920" height="400" fill="url(#dots-section)" />
  </svg>
);

const App: React.FC = () => {
  const { t } = useTranslation()
  const [showRick, setShowRick] = useState(false)
  const [showHarry, setShowHarry] = useState(false)
  const [ready, setReady] = useState(false)
  // Estado para forzar re-render al cambiar idioma
  const [currentLang, setCurrentLang] = useState(i18n.language)
  const [activeDot, setActiveDot] = useState(1)
  // Animación tipo ola
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev % 3) + 1)
    }, 900)
    return () => clearInterval(interval)
  }, [])

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
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4f378b 0%, #a259f7 60%, #f357a8 100%)",
        padding: "20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <SVGBodyDotsBackground>
        <svg viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="body-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2.5" fill="#bcbcd1" fillOpacity="0.35" />
            </pattern>
          </defs>
          <rect width="1920" height="1080" fill="url(#body-dots)" />
        </svg>
      </SVGBodyDotsBackground>
      <SVGHeaderBackground>{SVG_DOTS_HEADER}</SVGHeaderBackground>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header style={{ textAlign: "center", color: "white", marginBottom: "40px", position: "relative", zIndex: 2 }}>
          <Title className="app-title">{t("app.title")}</Title>
          <Subtitle className="app-title__subtitle">{t("app.subtitle")}</Subtitle>
          <PaginationDots>
            <span className={`dot${activeDot === 1 ? ' dot--active' : ''}`} />
            <span className={`dot${activeDot === 2 ? ' dot--active' : ''}`} />
            <span className={`dot${activeDot === 3 ? ' dot--active' : ''}`} />
          </PaginationDots>
        </header>

        {/* Selector de idioma debajo del header, con buen margen antes de las secciones */}
        <div style={{ display: "flex", justifyContent: "center", margin: "120px 0 48px 0", zIndex: 3, position: "relative" }}>
          <LanguageSwitcher language={i18n.language} onLanguageChange={handleLanguageChange} label={i18n.language === 'es' ? 'Idioma' : 'Language'} />
        </div>

        <ResponsiveMain>
          <CardSection>
            {/* Fondo blurreado y translúcido para Rick & Morty */}
            <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: "radial-gradient(ellipse at 60% 60%, rgba(58,198,253,0.18) 0%, rgba(162,89,247,0.32) 60%, rgba(162,89,247,0.12) 100%)",
              filter: "blur(24px)",
              opacity: 0.95,
              pointerEvents: "none"
            }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h2 style={{
                color: "#fff",
                textAlign: "center",
                marginBottom: "12px",
                fontWeight: 800,
                fontSize: "2.2rem",
                letterSpacing: "-1px",
                textShadow: "0 2px 8px rgba(44,19,56,0.10)"
              }}>
                🛸 {t('section.rick.title')}
              </h2>
              <div style={{
                color: "#e3e3e3",
                textAlign: "center",
                fontSize: "1.15rem",
                fontWeight: 400,
                marginBottom: "22px",
                textShadow: "0 1px 4px rgba(44,19,56,0.10)"
              }}>
                {t('section.rick.desc')}
              </div>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Button
                  onClick={() => setShowRick(!showRick)}
                  variant={showRick ? "danger" : "rick"}
                  icon={showRick ? "👁️" : "🚀"}
                  aria-label={showRick ? t("button.hideCharacters") : t("button.showCharacters")}
                >
                  {showRick ? t("button.hideCharacters") : t("button.showCharacters")}
                </Button>
              </div>
              {showRick && (
                <Suspense fallback={<div style={{ textAlign: "center", color: "white" }}>{t("loading")}</div>}>
                  <RickAndMortyCharacters language={i18n.language} />
                </Suspense>
              )}
            </div>
          </CardSection>

          <CardSection>
            {/* Fondo blurreado y translúcido para Harry Potter */}
            <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: "radial-gradient(ellipse at 60% 60%, rgba(255,224,102,0.18) 0%, rgba(243,87,168,0.32) 60%, rgba(243,87,168,0.12) 100%)",
              filter: "blur(24px)",
              opacity: 0.95,
              pointerEvents: "none"
            }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h2 style={{
                color: "#fff",
                textAlign: "center",
                marginBottom: "12px",
                fontWeight: 800,
                fontSize: "2.2rem",
                letterSpacing: "-1px",
                textShadow: "0 2px 8px rgba(44,19,56,0.10)"
              }}>
                ⚡ {t('section.harry.title')}
              </h2>
              <div style={{
                color: "#e3e3e3",
                textAlign: "center",
                fontSize: "1.15rem",
                fontWeight: 400,
                marginBottom: "22px",
                textShadow: "0 1px 4px rgba(44,19,56,0.10)"
              }}>
                {t('section.harry.desc')}
              </div>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Button
                  onClick={() => setShowHarry(!showHarry)}
                  variant={showHarry ? "danger" : "harry"}
                  icon={showHarry ? "👁️" : "🪄"}
                  aria-label={showHarry ? t("button.hideCharacters") : t("button.showCharacters")}
                >
                  {showHarry ? t("button.hideCharacters") : t("button.showCharacters")}
                </Button>
              </div>
              {showHarry && (
                <Suspense fallback={<div style={{ textAlign: "center", color: "white" }}>{t("loading")}</div>}>
                  <HarryPotterCharacters language={i18n.language} />
                </Suspense>
              )}
            </div>
          </CardSection>
        </ResponsiveMain>
      </div>
    </div>
  )
}

export default App
