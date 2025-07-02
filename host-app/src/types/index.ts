export interface MicrofrontendProps {
  language: string
}

export interface LanguageContextType {
  language: string
  changeLanguage: (lang: string) => void
}
