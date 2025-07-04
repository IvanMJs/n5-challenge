"use client"

import { useState, useEffect } from "react"
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { GridWrapper, LoadingWrapper, ErrorWrapper } from "./CharacterGrid.styles"

interface Character {
  id: string | number
  name: string
  image: string
  status?: string
  species?: string
  gender?: string
  house?: string
  actor?: string
  wizard?: boolean
}

interface CharacterGridProps {
  type: "rick-and-morty" | "harry-potter"
  language: string
}

export function CharacterGrid({ type, language }: CharacterGridProps) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      setError(null)

      try {
        let url = ""
        if (type === "rick-and-morty") {
          url = "https://rickandmortyapi.com/api/character"
        } else {
          url = "https://hp-api.onrender.com/api/characters"
        }

        const response = await fetch(url)
        const data = await response.json()

        let processedData: Character[] = []

        if (type === "rick-and-morty") {
          processedData = data.results?.slice(0, 12) || []
        } else {
          processedData = data
            .filter((char: any) => char.image && char.image.trim() !== "")
            .slice(0, 12)
            .map((char: any) => ({
              ...char,
              id: char.id || char.name,
            }))
        }

        setCharacters(processedData)
      } catch (err) {
        setError("Error loading characters")
        console.error("Error fetching characters:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [type])

  const translations = {
    en: { loading: "Loading amazing characters...", error: "Oops! Something went wrong", retry: "Try Again" },
    es: { loading: "Cargando personajes increíbles...", error: "¡Ups! Algo salió mal", retry: "Intentar de Nuevo" },
  }

  const t = translations[language as keyof typeof translations]

  if (loading) {
    return (
      <LoadingWrapper className="character-grid__loading">
        <div className="character-grid__spinner" />
        <div className="character-grid__spinner-secondary" />
        <span className="character-grid__loading-text">{t.loading}</span>
        <div className="character-grid__dots">
          <div className="character-grid__dot" />
          <div className="character-grid__dot" />
          <div className="character-grid__dot" />
        </div>
      </LoadingWrapper>
    )
  }

  if (error) {
    return (
      <ErrorWrapper className="character-grid__error">
        <div className="character-grid__error-box">
          <div className="character-grid__error-emoji">😵</div>
          <div className="character-grid__error-text">{t.error}</div>
          <button
            className="character-grid__retry-btn"
            onClick={() => window.location.reload()}
          >
            {t.retry}
          </button>
        </div>
      </ErrorWrapper>
    )
  }

  return (
    <GridWrapper className="character-grid__grid">
      {characters.map((character, index) => (
        <div key={character.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <CharacterCard character={character} type={type} language={language} />
        </div>
      ))}
    </GridWrapper>
  )
}
