"use client"

import { useState } from "react"
import { Header } from "../components/Header/Header"
import { CharacterGrid } from "../components/CharacterGrid/CharacterGrid"
import { LanguageSwitcher } from "../components/LanguageSwitcher/LanguageSwitcher"
import { Button } from "../components/Button/Button"
import { FloatingElements } from "../components/FloatingElements/FloatingElements"
import { 
  PageWrapper,
  AnimatedBackground,
  ContentWrapper,
  LanguageSwitcherContainer,
  SectionGroup,
  SectionCard,
  SectionIcon,
  SectionTitle,
  SectionDescription,
  SectionButtonWrapper,
  SectionContentTransition,
  Footer,
  FooterContent
} from "./Page.styles"

export default function HomePage() {
  const [language, setLanguage] = useState("en")
  const [showRickAndMorty, setShowRickAndMorty] = useState(false)
  const [showHarryPotter, setShowHarryPotter] = useState(false)

  const translations = {
    en: {
      title: "Character Universe Explorer",
      subtitle: "Discover amazing characters from your favorite universes",
      rickAndMorty: "Rick & Morty Universe",
      harryPotter: "Wizarding World",
      showCharacters: "Explore Characters",
      hideCharacters: "Hide Characters",
      languageSwitch: "Language",
      rickDescription: "Dive into the multiverse with Rick and Morty's crazy adventures",
      harryDescription: "Enter the magical world of Hogwarts and beyond",
    },
    es: {
      title: "Explorador de Universos de Personajes",
      subtitle: "Descubre personajes increíbles de tus universos favoritos",
      rickAndMorty: "Universo Rick & Morty",
      harryPotter: "Mundo Mágico",
      showCharacters: "Explorar Personajes",
      hideCharacters: "Ocultar Personajes",
      languageSwitch: "Idioma",
      rickDescription: "Sumérgete en el multiverso con las locas aventuras de Rick y Morty",
      harryDescription: "Entra al mundo mágico de Hogwarts y más allá",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <PageWrapper>
      <FloatingElements />
      {/* Animated background (tiled SVG pattern) */}
      <AnimatedBackground />
      <Header title={t.title} subtitle={t.subtitle} />
      <ContentWrapper>
        <LanguageSwitcherContainer>
          <LanguageSwitcher language={language} onLanguageChange={setLanguage} label={t.languageSwitch} />
        </LanguageSwitcherContainer>
        {/* Rick and Morty Section */}
        <SectionGroup>
          <SectionCard variant="rick">
            <SectionIcon variant="rick">🛸</SectionIcon>
            <div className="section__text">
              <SectionTitle variant="rick">{t.rickAndMorty}</SectionTitle>
              <SectionDescription>{t.rickDescription}</SectionDescription>
            </div>
            <SectionButtonWrapper>
              <Button
                onClick={() => setShowRickAndMorty(!showRickAndMorty)}
                variant={showRickAndMorty ? "danger" : "rick"}
                icon={showRickAndMorty ? "👁️" : "🚀"}
              >
                {showRickAndMorty ? t.hideCharacters : t.showCharacters}
              </Button>
            </SectionButtonWrapper>
            <SectionContentTransition show={showRickAndMorty}>
              {showRickAndMorty && <CharacterGrid type="rick-and-morty" language={language} />}
            </SectionContentTransition>
          </SectionCard>
        </SectionGroup>
        {/* Harry Potter Section */}
        <SectionGroup>
          <SectionCard variant="harry">
            <SectionIcon variant="harry">⚡</SectionIcon>
            <div className="section__text">
              <SectionTitle variant="harry">{t.harryPotter}</SectionTitle>
              <SectionDescription>{t.harryDescription}</SectionDescription>
            </div>
            <SectionButtonWrapper>
              <Button
                onClick={() => setShowHarryPotter(!showHarryPotter)}
                variant={showHarryPotter ? "danger" : "harry"}
                icon={showHarryPotter ? "👁️" : "🪄"}
              >
                {showHarryPotter ? t.hideCharacters : t.showCharacters}
              </Button>
            </SectionButtonWrapper>
            <SectionContentTransition show={showHarryPotter}>
              {showHarryPotter && <CharacterGrid type="harry-potter" language={language} />}
            </SectionContentTransition>
          </SectionCard>
        </SectionGroup>
      </ContentWrapper>
      {/* Footer */}
      <Footer>
        <FooterContent>
          <p className="footer__main">✨ Built with React, TypeScript & Module Federation ✨</p>
          <p className="footer__sub">Explore infinite possibilities across universes</p>
        </FooterContent>
      </Footer>
    </PageWrapper>
  )
}
