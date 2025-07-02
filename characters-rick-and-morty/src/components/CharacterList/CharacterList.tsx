"use client"

import type React from "react"
import { useState, useEffect } from "react"

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
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h3 style={{ margin: "0 0 12px 0", fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>
                {character.name}
              </h3>
              <div style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
                <div>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color:
                        character.status === "Alive" ? "#28a745" : character.status === "Dead" ? "#dc3545" : "#ffc107",
                    }}
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
    </div>
  )
}

export default CharacterList
