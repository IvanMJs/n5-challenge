import type React from "react"
import type { Character } from "../../types"
import { getTranslation } from "../../utils/translations"
import { CardContainer } from "./CharacterCard.styles"

interface CharacterCardProps {
  character: Character
  language: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, language }) => {
  const getHouseClass = (house: string) => {
    if (!house) return "character-card__house--default"
    return `character-card__house--${house.toLowerCase()}`
  }

  const getYesNo = (value: boolean) => {
    return getTranslation(value ? "yes" : "no", language)
  }

  return (
    <CardContainer className="character-card">
      <img
        src={character.image || "/placeholder.svg"}
        alt={character.name}
        className="character-card__image"
        loading="lazy"
      />
      <div className="character-card__content">
        <h3 className="character-card__name">{character.name}</h3>
        <div className="character-card__info">
          {character.house && (
            <div className="character-card__info-item">
              <span className="character-card__info-item-label">{getTranslation("character.house", language)}:</span>
              <span className={`character-card__house ${getHouseClass(character.house)}`}>{character.house}</span>
            </div>
          )}
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.species", language)}:</span>
            <span className="character-card__info-item-value">{character.species}</span>
          </div>
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.gender", language)}:</span>
            <span className="character-card__info-item-value">{character.gender}</span>
          </div>
          {character.actor && (
            <div className="character-card__info-item">
              <span className="character-card__info-item-label">{getTranslation("character.actor", language)}:</span>
              <span className="character-card__info-item-value">{character.actor}</span>
            </div>
          )}
          <div className="character-card__info-item">
            <span className="character-card__info-item-label">{getTranslation("character.wizard", language)}:</span>
            <span className="character-card__info-item-value">
              {getYesNo(character.wizard)}
              {character.wizard && <span className="character-card__badge">✨</span>}
            </span>
          </div>
          {character.hogwartsStudent && (
            <div className="character-card__info-item">
              <span className="character-card__info-item-label">{getTranslation("character.student", language)}:</span>
              <span className="character-card__info-item-value">
                {getYesNo(character.hogwartsStudent)}
                <span className="character-card__badge">🎓</span>
              </span>
            </div>
          )}
          {character.hogwartsStaff && (
            <div className="character-card__info-item">
              <span className="character-card__info-item-label">{getTranslation("character.staff", language)}:</span>
              <span className="character-card__info-item-value">
                {getYesNo(character.hogwartsStaff)}
                <span className="character-card__badge">👨‍🏫</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </CardContainer>
  )
}
