"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ListWrapper } from "./CharacterList.styles"

interface Character {
  id: string
  name: string
  house: string
  actor: string
  wizard: boolean
  image: string
  species: string
  gender: string
  dateOfBirth: string
  ancestry: string
  eyeColour: string
  hairColour: string
  patronus: string
}

interface Props {
  language: string
}

const getHouseColor = (house: string) => {
  switch (house.toLowerCase()) {
    case "gryffindor":
      return "#740001"
    case "slytherin":
      return "#1a472a"
    case "ravenclaw":
      return "#0e1a40"
    case "hufflepuff":
      return "#ecb939"
    default:
      return "#666"
  }
}

const CharacterList: React.FC<Props> = ({ language }) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://hp-api.onrender.com/api/characters")
        if (!response.ok) {
          throw new Error("Failed to fetch characters")
        }
        const data = await response.json()
        const filtered = data
          .filter((char: any) => char.image && char.image.trim() !== "")
          .slice(0, 12)
          .map((char: any) => ({
            ...char,
            id: char.id || char.name,
          }))
        setCharacters(filtered)
      } catch (error) {
        console.error("Error fetching characters:", error)
        setError("Failed to load characters")
      } finally {
        setLoading(false)
      }
    }
    fetchCharacters()
  }, [])

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ fontSize: "18px", color: "#666" }}>Loading Harry Potter characters...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ fontSize: "18px", color: "#dc3545" }}>{error}</div>
      </div>
    )
  }

  return (
    <ListWrapper className="character-list">
      <div className="character-list__grid">
        {characters.map((character) => (
          <div
            key={character.id}
            className="character-list__card"
          >
            <img
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              className="character-list__image"
            />
            <div className="character-list__content">
              <h3 className="character-list__name">{character.name}</h3>
              <div className="character-list__info">
                {character.house && (
                  <div>
                    <strong>House:</strong>{" "}
                    <span>{character.house}</span>
                  </div>
                )}
                {character.actor && (
                  <div>
                    <strong>Actor:</strong>{" "}
                    <span>{character.actor}</span>
                  </div>
                )}
                <div>
                  <strong>Wizard:</strong>{" "}
                  <span>{character.wizard ? "Yes" : "No"}</span>
                </div>
                {character.species && (
                  <div>
                    <strong>Species:</strong>{" "}
                    <span>{character.species}</span>
                  </div>
                )}
                {character.ancestry && (
                  <div>
                    <strong>Ancestry:</strong>{" "}
                    <span>{character.ancestry}</span>
                  </div>
                )}
                {character.patronus && (
                  <div>
                    <strong>Patronus:</strong>{" "}
                    <span>{character.patronus}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ListWrapper>
  )
}

export default CharacterList
