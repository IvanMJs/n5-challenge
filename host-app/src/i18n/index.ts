import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      "app.title": "Character Universe Explorer",
      "app.subtitle": "Discover amazing characters from your favorite universes",
      "language.switch": "Switch Language",
      "characters.rickAndMorty": "Rick and Morty Characters",
      "characters.harryPotter": "Harry Potter Characters",
      loading: "Loading...",
      "loading.amazingCharacters": "Loading amazing characters...",
      "error.generic": "Something went wrong",
      "button.showCharacters": "Show Characters",
      "button.hideCharacters": "Hide Characters",
      "section.rick.title": "Rick & Morty Universe",
      "section.rick.desc": "Dive into the multiverse with Rick and Morty's crazy adventures",
      "section.harry.title": "Wizarding World",
      "section.harry.desc": "Enter the magical world of Hogwarts and beyond",
    },
  },
  es: {
    translation: {
      "app.title": "Explorador de Universos de Personajes",
      "app.subtitle": "Descubre personajes increíbles de tus universos favoritos",
      "language.switch": "Cambiar Idioma",
      "characters.rickAndMorty": "Personajes de Rick y Morty",
      "characters.harryPotter": "Personajes de Harry Potter",
      loading: "Cargando...",
      "loading.amazingCharacters": "Cargando personajes increíbles...",
      "error.generic": "Algo salió mal",
      "button.showCharacters": "Mostrar Personajes",
      "button.hideCharacters": "Ocultar Personajes",
      "section.rick.title": "Universo Rick & Morty",
      "section.rick.desc": "Sumérgete en el multiverso con las locas aventuras de Rick y Morty",
      "section.harry.title": "Mundo Mágico",
      "section.harry.desc": "Entra al mundo mágico de Hogwarts y más allá",
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Forzar idioma inicial a inglés
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
