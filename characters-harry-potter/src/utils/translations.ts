export const translations = {
  en: {
    "character.name": "Character Name",
    "character.house": "House",
    "character.species": "Species",
    "character.gender": "Gender",
    "character.actor": "Actor",
    "character.wizard": "Wizard",
    "character.student": "Student",
    "character.staff": "Staff",
    loading: "Loading...",
    "error.generic": "Something went wrong",
    retry: "Retry",
    yes: "Yes",
    no: "No",
  },
  es: {
    "character.name": "Nombre del Personaje",
    "character.house": "Casa",
    "character.species": "Especie",
    "character.gender": "Género",
    "character.actor": "Actor",
    "character.wizard": "Mago",
    "character.student": "Estudiante",
    "character.staff": "Personal",
    loading: "Cargando...",
    "error.generic": "Algo salió mal",
    retry: "Reintentar",
    yes: "Sí",
    no: "No",
  },
}

export const getTranslation = (key: string, language: string): string => {
  const lang = language.startsWith("es") ? "es" : "en"
  return translations[lang][key as keyof typeof translations.en] || key
}
