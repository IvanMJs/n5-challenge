interface Character {
  id: string | number
  name: string
  image: string
  status?: string
  species?: string
  gender?: string
  house?: string
  actor?: string
  wizard?: boolean
}

interface CharacterCardProps {
  character: Character
  type: "rick-and-morty" | "harry-potter"
  language: string
}

export function CharacterCard({ character, type, language }: CharacterCardProps) {
  const translations = {
    en: {
      status: "Status",
      species: "Species",
      gender: "Gender",
      house: "House",
      actor: "Actor",
      wizard: "Wizard",
      yes: "Yes",
      no: "No",
    },
    es: {
      status: "Estado",
      species: "Especie",
      gender: "Género",
      house: "Casa",
      actor: "Actor",
      wizard: "Mago",
      yes: "Sí",
      no: "No",
    },
  }

  const t = translations[language as keyof typeof translations]

  const getHouseClass = (house: string) => {
    if (!house) return "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
    const houseClasses = {
      gryffindor: "bg-gradient-to-r from-red-600 to-yellow-500 text-white",
      slytherin: "bg-gradient-to-r from-green-700 to-gray-600 text-white",
      ravenclaw: "bg-gradient-to-r from-blue-800 to-indigo-600 text-white",
      hufflepuff: "bg-gradient-to-r from-yellow-500 to-orange-400 text-black",
    }
    return (
      houseClasses[house.toLowerCase() as keyof typeof houseClasses] ||
      "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
    )
  }

  const getStatusClass = (status: string) => {
    const statusClasses = {
      alive: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
      dead: "bg-gradient-to-r from-red-500 to-pink-600 text-white",
      unknown: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
    }
    return (
      statusClasses[status?.toLowerCase() as keyof typeof statusClasses] ||
      "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
    )
  }

  return (
    <div className="character-card group relative">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 border border-white/20 hover:border-white/40 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-3xl"></div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-t-3xl">
            <img
              src={character.image || "/placeholder.svg?height=300&width=300"}
              alt={character.name}
              className="character-card__image w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="character-card__content p-6 relative">
            <h3 className="character-card__name text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-yellow-300 transition-colors duration-300">
              {character.name}
            </h3>

            <div className="character-card__info space-y-3 text-sm">
              {type === "rick-and-morty" && (
                <>
                  {character.status && (
                    <div className="character-card__info-item flex items-center justify-between">
                      <span className="character-card__info-item-label font-semibold text-white/80">{t.status}:</span>
                      <span
                        className={`character-card__status px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg ${getStatusClass(character.status)}`}
                      >
                        {character.status}
                      </span>
                    </div>
                  )}
                  {character.species && (
                    <div className="character-card__info-item flex justify-between">
                      <span className="character-card__info-item-label font-semibold text-white/80">{t.species}:</span>
                      <span className="character-card__info-item-value text-white font-medium">
                        {character.species}
                      </span>
                    </div>
                  )}
                  {character.gender && (
                    <div className="character-card__info-item flex justify-between">
                      <span className="character-card__info-item-label font-semibold text-white/80">{t.gender}:</span>
                      <span className="character-card__info-item-value text-white font-medium">{character.gender}</span>
                    </div>
                  )}
                </>
              )}

              {type === "harry-potter" && (
                <>
                  {character.house && (
                    <div className="character-card__info-item flex items-center justify-between">
                      <span className="character-card__info-item-label font-semibold text-white/80">{t.house}:</span>
                      <span
                        className={`character-card__house px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getHouseClass(character.house)}`}
                      >
                        {character.house}
                      </span>
                    </div>
                  )}
                  {character.actor && (
                    <div className="character-card__info-item flex justify-between">
                      <span className="character-card__info-item-label font-semibold text-white/80">{t.actor}:</span>
                      <span className="character-card__info-item-value text-white font-medium text-xs">
                        {character.actor}
                      </span>
                    </div>
                  )}
                  <div className="character-card__info-item flex items-center justify-between">
                    <span className="character-card__info-item-label font-semibold text-white/80">{t.wizard}:</span>
                    <span className="character-card__info-item-value text-white font-medium flex items-center">
                      {character.wizard ? t.yes : t.no}
                      {character.wizard && <span className="ml-2 text-lg animate-pulse">✨</span>}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
