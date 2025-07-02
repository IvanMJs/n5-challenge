"use client"

interface LanguageSwitcherProps {
  language: string
  onLanguageChange: (lang: string) => void
  label: string
}

export function LanguageSwitcher({ language, onLanguageChange, label }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher flex items-center gap-4">
      <label className="language-switcher__label font-semibold text-white/90 text-sm">🌍 {label}:</label>
      <div className="relative">
        <select
          className="language-switcher__select appearance-none bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 pr-8 text-white font-medium cursor-pointer hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="en" className="text-gray-800">
            🇺🇸 English
          </option>
          <option value="es" className="text-gray-800">
            🇪🇸 Español
          </option>
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
