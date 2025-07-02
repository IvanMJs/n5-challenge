"use client"

import type React from "react"
import { useTranslation } from "react-i18next"
import { useLanguage } from "../../../contexts/LanguageContext"
import { LanguageSwitcherContainer } from "./LanguageSwitcher.styles"

export const LanguageSwitcher: React.FC = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value)
  }

  return (
    <LanguageSwitcherContainer className="language-switcher">
      <label className="language-switcher__label" htmlFor="language-select">
        {t("language.switch")}:
      </label>
      <select
        id="language-select"
        className="language-switcher__select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </LanguageSwitcherContainer>
  )
}
