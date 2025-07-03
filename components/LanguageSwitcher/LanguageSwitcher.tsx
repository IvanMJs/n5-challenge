"use client"

import { SwitcherWrapper } from "./LanguageSwitcher.styles"

interface LanguageSwitcherProps {
  language: string
  onLanguageChange: (lang: string) => void
  label: string
}

export function LanguageSwitcher({ language, onLanguageChange, label }: LanguageSwitcherProps) {
  return (
    <SwitcherWrapper className="language-switcher">
      <label className="language-switcher__label">🌍 {label}:</label>
      <div style={{ position: "relative" }}>
        <select
          className="language-switcher__select"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
        <div className="language-switcher__icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </SwitcherWrapper>
  )
}
