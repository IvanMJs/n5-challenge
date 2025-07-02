"use client"

import type React from "react"
import { useState, useEffect } from "react"

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
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              border: `3px solid ${getHouseColor(character.house)}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)"
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h3 style={{ margin: "0 0 12px 0", fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>
                {character.name}
              </h3>
              <div style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
                {character.house && (
                  <div>
                    <strong>House:</strong>{" "}
                    <span style={{ color: getHouseColor(character.house), fontWeight: "bold" }}>{character.house}</span>
                  </div>
                )}
                {character.actor && (
                  <div>
                    <strong>Actor:</strong> {character.actor}
                  </div>
                )}
                <div>
                  <strong>Wizard:</strong> {character.wizard ? "Yes" : "No"}
                </div>
                {character.species && (
                  <div>
                    <strong>Species:</strong> {character.species}
                  </div>
                )}
                {character.ancestry && (
                  <div>
                    <strong>Ancestry:</strong> {character.ancestry}
                  </div>
                )}
                {character.patronus && (
                  <div>
                    <strong>Patronus:</strong> {character.patronus}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterList
