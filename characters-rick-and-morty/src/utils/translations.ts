export const translations = {
  en: {
    "character.name": "Character Name",
    "character.status": "Status",
    "character.species": "Species",
    "character.gender": "Gender",
    "character.origin": "Origin",
    loading: "Loading...",
    "error.generic": "Something went wrong",
    retry: "Retry",
  },
  es: {
    "character.name": "Nombre del Personaje",
    "character.status": "Estado",
    "character.species": "Especie",
    "character.gender": "Género",
    "character.origin": "Origen",
    loading: "Cargando...",
    "error.generic": "Algo salió mal",
    retry: "Reintentar",
  },
}

export const getTranslation = (key: string, language: string): string => {
  const lang = language.startsWith("es") ? "es" : "en"
  return translations[lang][key as keyof typeof translations.en] || key
}
