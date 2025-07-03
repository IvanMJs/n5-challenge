import { Image, Content, Name, Info, InfoItem, InfoItemLabel, InfoItemValue, StatusBadge, CardWrapper } from "./CharacterCard.styles"
import type React from "react"
import type { Character } from "../../types"
import { getTranslation } from "../../utils/translations"

interface CharacterCardProps {
  character: Character
  language: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, language }) => {
  return (
    <CardWrapper className="character-card">
      <div className="character-card__container">
        <Image
          src={character.image || "/placeholder.svg"}
          alt={character.name}
          loading="lazy"
        />
        <Content>
          <Name>{character.name}</Name>
          <Info>
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.status", language)}:</InfoItemLabel>
              <InfoItemValue>
                <StatusBadge status={character.status}>{character.status}</StatusBadge>
              </InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.species", language)}:</InfoItemLabel>
              <InfoItemValue>{character.species}</InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.gender", language)}:</InfoItemLabel>
              <InfoItemValue>{character.gender}</InfoItemValue>
            </InfoItem>
            {character.origin?.name && (
              <InfoItem>
                <InfoItemLabel>{getTranslation("character.origin", language)}:</InfoItemLabel>
                <InfoItemValue>{character.origin.name}</InfoItemValue>
              </InfoItem>
            )}
          </Info>
        </Content>
      </div>
    </CardWrapper>
  )
}
