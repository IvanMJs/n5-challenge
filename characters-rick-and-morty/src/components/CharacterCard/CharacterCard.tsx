import { CardWrapper } from "./CharacterCard.styles"
import type React from "react"
import type { Character } from "../../types"
import { getTranslation } from "../../utils/translations"

interface CharacterCardProps {
  character: Character
  language: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, language }) => {
  const getStatusClass = (status: string) => {
    return `character-card__status--${status.toLowerCase()}`
  }

  return (
    <CardWrapper className="character-card">
      <img
        src={character.image || "/placeholder.svg"}
        alt={character.name}
        className="character-card__image"
        loading="lazy"
      />
      <div className="character-card__content">
        <h3 className="character-card__name">{character.name}</h3>
        <div className="character-card__info">
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.status", language)}:</span>
            <span className={`character-card__status ${getStatusClass(character.status)}`}>{character.status}</span>
          </div>
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.species", language)}:</span>
            <span className="character-card__info-item-value">{character.species}</span>
          </div>
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.gender", language)}:</span>
            <span className="character-card__info-item-value">{character.gender}</span>
          </div>
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.origin", language)}:</span>
            <span className="character-card__info-item-value">{character.origin.name}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
