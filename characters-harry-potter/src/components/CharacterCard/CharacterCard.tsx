import type React from "react"
import type { Character } from "../../types"
import { getTranslation } from "../../utils/translations"
import {
  CardContainer,
  Image,
  Content,
  Name,
  Info,
  InfoItem,
  InfoItemLabel,
  InfoItemValue,
  House,
  Badge
} from "./CharacterCard.styles"

interface CharacterCardProps {
  character: Character
  language: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, language }) => {
  const getYesNo = (value: boolean) => {
    return getTranslation(value ? "yes" : "no", language)
  }

  return (
    <CardContainer>
      <Image
        src={character.image || "/placeholder.svg"}
        alt={character.name}
        loading="lazy"
      />
      <Content>
        <Name>{character.name}</Name>
        <Info>
          {character.house && (
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.house", language)}:</InfoItemLabel>
              <House house={character.house}>{character.house}</House>
            </InfoItem>
          )}
          <InfoItem>
            <InfoItemLabel>{getTranslation("character.species", language)}:</InfoItemLabel>
            <InfoItemValue>{character.species}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>{getTranslation("character.gender", language)}:</InfoItemLabel>
            <InfoItemValue>{character.gender}</InfoItemValue>
          </InfoItem>
          {character.actor && (
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.actor", language)}:</InfoItemLabel>
              <InfoItemValue>{character.actor}</InfoItemValue>
            </InfoItem>
          )}
          <InfoItem>
            <InfoItemLabel>{getTranslation("character.wizard", language)}:</InfoItemLabel>
            <InfoItemValue>
              {getYesNo(character.wizard)}
              {character.wizard && <Badge>✨</Badge>}
            </InfoItemValue>
          </InfoItem>
          {character.hogwartsStudent && (
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.student", language)}:</InfoItemLabel>
              <InfoItemValue>
                {getYesNo(character.hogwartsStudent)}
                <Badge>🎓</Badge>
              </InfoItemValue>
            </InfoItem>
          )}
          {character.hogwartsStaff && (
            <InfoItem>
              <InfoItemLabel>{getTranslation("character.staff", language)}:</InfoItemLabel>
              <InfoItemValue>
                {getYesNo(character.hogwartsStaff)}
                <Badge>👨‍🏫</Badge>
              </InfoItemValue>
            </InfoItem>
          )}
        </Info>
      </Content>
    </CardContainer>
  )
}
