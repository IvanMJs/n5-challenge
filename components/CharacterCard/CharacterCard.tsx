import { CardWrapper, BottomBorder } from "./CharacterCard.styles"

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

  return (
    <CardWrapper>
      <div className="character-card__container">
        {/* Glow effect */}
        <div className="character-card__glow" />
        <div>
          <div>
            <img
              src={character.image || "/placeholder.svg?height=300&width=300"}
              alt={character.name}
              className="character-card__image"
              loading="lazy"
            />
            {/* Image overlay */}
            <div className="character-card__image-overlay" />
          </div>
          <div className="character-card__content">
            <h3 className="character-card__name">
              {character.name}
            </h3>
            <div className="character-card__info">
              {type === "rick-and-morty" && (
                <>
                  {character.status && (
                    <div className="character-card__info-item">
                      <span className="character-card__info-item-label">{t.status}:</span>
                      <span className={`character-card__status ${character.status?.toLowerCase()}`}>{character.status}</span>
                    </div>
                  )}
                  {character.species && (
                    <div className="character-card__info-item">
                      <span className="character-card__info-item-label">{t.species}:</span>
                      <span className="character-card__info-item-value">
                        {character.species}
                      </span>
                    </div>
                  )}
                  {character.gender && (
                    <div className="character-card__info-item">
                      <span className="character-card__info-item-label">{t.gender}:</span>
                      <span className="character-card__info-item-value">{character.gender}</span>
                    </div>
                  )}
                </>
              )}
              {type === "harry-potter" && (
                <>
                  {character.house && (
                    <div className="character-card__info-item">
                      <span className="character-card__info-item-label">{t.house}:</span>
                      <span className={`character-card__house ${character.house?.toLowerCase()}`}>{character.house}</span>
                    </div>
                  )}
                  {character.actor && (
                    <div className="character-card__info-item">
                      <span className="character-card__info-item-label">{t.actor}:</span>
                      <span className="character-card__info-item-value">{character.actor}</span>
                    </div>
                  )}
                  <div className="character-card__info-item">
                    <span className="character-card__info-item-label">{t.wizard}:</span>
                    <span className="character-card__info-item-value">
                      {character.wizard ? t.yes : t.no}
                      {character.wizard && <span className="character-card__badge">✨</span>}
                    </span>
                  </div>
                </>
              )}
            </div>
            {/* Decorative bottom border */}
            <BottomBorder />
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
