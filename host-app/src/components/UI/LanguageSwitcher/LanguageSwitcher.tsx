"use client"

import type React from "react"
import { LanguageSwitcherContainer } from "./LanguageSwitcher.styles"

interface LanguageSwitcherProps {
  language: string
  onLanguageChange: (lang: string) => void
  label: string
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, onLanguageChange, label }) => {
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value)
  }

  return (
    <LanguageSwitcherContainer className="language-switcher">
      <label className="language-switcher__label" htmlFor="language-select">
        {label}:
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
