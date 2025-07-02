"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Header } from "../../components/Layout/Header/Header"
import { Button } from "../../components/UI/Button/Button"
import { MicrofrontendLoader } from "../../components/MicrofrontendLoader/MicrofrontendLoader"
import { AppWrapper } from "./AppContainer.styles"

export const AppContainer: React.FC = () => {
  const { t } = useTranslation()
  const [showRickAndMorty, setShowRickAndMorty] = useState(false)
  const [showHarryPotter, setShowHarryPotter] = useState(false)

  return (
    <AppWrapper className="app">
      <Header />
      <main className="app__main">
        <section className="app__section">
          <h2 className="app__section-title">{t("characters.rickAndMorty")}</h2>
          <div className="app__section-controls">
            <Button
              onClick={() => setShowRickAndMorty(!showRickAndMorty)}
              variant={showRickAndMorty ? "danger" : "primary"}
            >
              {showRickAndMorty ? t("button.hideCharacters") : t("button.showCharacters")}
            </Button>
          </div>
          {showRickAndMorty && <MicrofrontendLoader microfrontendName="rickAndMortyMF" componentName="CharacterList" />}
        </section>

        <section className="app__section">
          <h2 className="app__section-title">{t("characters.harryPotter")}</h2>
          <div className="app__section-controls">
            <Button
              onClick={() => setShowHarryPotter(!showHarryPotter)}
              variant={showHarryPotter ? "danger" : "primary"}
            >
              {showHarryPotter ? t("button.hideCharacters") : t("button.showCharacters")}
            </Button>
          </div>
          {showHarryPotter && <MicrofrontendLoader microfrontendName="harryPotterMF" componentName="CharacterList" />}
        </section>
      </main>
    </AppWrapper>
  )
}
