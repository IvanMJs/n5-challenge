"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ListWrapper } from "./CharacterList.styles"

interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
}

interface Props {
  language: string
}

const CharacterList: React.FC<Props> = ({ language }) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://rickandmortyapi.com/api/character")
        if (!response.ok) {
          throw new Error("Failed to fetch characters")
        }
        const data = await response.json()
        setCharacters(data.results?.slice(0, 12) || [])
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
        <div style={{ fontSize: "18px", color: "#666" }}>Loading Rick & Morty characters...</div>
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
              <h3 className="character-list__name">
                {character.name}
              </h3>
              <div className="character-list__info">
                <div>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      character.status === "Alive"
                        ? "character-list__status--alive"
                        : character.status === "Dead"
                        ? "character-list__status--dead"
                        : "character-list__status--unknown"
                    }
                  >
                    {character.status}
                  </span>
                </div>
                <div>
                  <strong>Species:</strong> {character.species}
                </div>
                <div>
                  <strong>Gender:</strong> {character.gender}
                </div>
                <div>
                  <strong>Origin:</strong> {character.origin.name}
                </div>
                <div>
                  <strong>Location:</strong> {character.location.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ListWrapper>
  )
}

export default CharacterList
