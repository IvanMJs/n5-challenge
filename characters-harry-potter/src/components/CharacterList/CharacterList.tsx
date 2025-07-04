"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ListWrapper } from "./CharacterList.styles"
import { CharacterCard } from "../CharacterCard/CharacterCard"
import type { Character } from "../../types"

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
            id: char.id || char.name,
            name: char.name || "",
            alternate_names: char.alternate_names || [],
            species: char.species || "",
            gender: char.gender || "",
            house: char.house || "",
            dateOfBirth: char.dateOfBirth || null,
            yearOfBirth: char.yearOfBirth || null,
            wizard: char.wizard || false,
            ancestry: char.ancestry || "",
            eyeColour: char.eyeColour || "",
            hairColour: char.hairColour || "",
            wand: char.wand || { wood: "", core: "", length: null },
            patronus: char.patronus || "",
            hogwartsStudent: char.hogwartsStudent || false,
            hogwartsStaff: char.hogwartsStaff || false,
            actor: char.actor || "",
            alternate_actors: char.alternate_actors || [],
            alive: typeof char.alive === "boolean" ? char.alive : true,
            image: char.image || "",
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
