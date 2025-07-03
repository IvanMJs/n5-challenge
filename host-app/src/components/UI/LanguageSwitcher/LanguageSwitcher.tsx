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
      <label className="language-switcher__label" htmlFor="language-select" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span role="img" aria-label="language" style={{ fontSize: 20 }}>🌐</span>
        {label}
      </label>
      <select
        id="language-select"
        className="language-switcher__select"
        value={language}
        onChange={handleLanguageChange}
        style={{
          borderRadius: '8px',
          padding: '8px 16px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          marginLeft: 8,
          background: 'rgba(255,255,255,0.15)', // Fondo semitransparente
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          fontWeight: 600,
          color: '#333', // Texto oscuro para visibilidad en el dropdown
          outline: 'none',
          transition: 'border 0.2s',
        }}
      >
        <option value="en">us English</option>
        <option value="es">es Español</option>
      </select>
    </LanguageSwitcherContainer>
  )
}
