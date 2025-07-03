"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ListWrapper } from "./CharacterList.styles"
import { CharacterCard } from "../CharacterCard/CharacterCard"
import type { Character } from "../../types"

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
        const filtered = (data.results || [])
          .slice(0, 12)
          .map((char: any) => ({
            id: char.id,
            name: char.name || "",
            status: char.status || "unknown",
            species: char.species || "",
            type: char.type || "",
            gender: char.gender || "",
            origin: char.origin || { name: "", url: "" },
            location: char.location || { name: "", url: "" },
            image: char.image || "",
            episode: char.episode || [],
            url: char.url || "",
            created: char.created || "",
          })) as Character[];
        setCharacters(filtered);
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
          <CharacterCard key={character.id} character={character} language={language} />
        ))}
      </div>
    </ListWrapper>
  )
}

export default CharacterList
