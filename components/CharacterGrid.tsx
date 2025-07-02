"use client"

import { useState, useEffect } from "react"
import { CharacterCard } from "./CharacterCard"

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
      <div className="character-list__loading flex flex-col items-center justify-center py-16">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
          ></div>
        </div>
        <span className="mt-6 text-xl text-white/90 font-medium animate-pulse">{t.loading}</span>
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="character-list__error text-center py-16">
        <div className="backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-2xl p-8 max-w-md mx-auto">
          <div className="text-6xl mb-4">😵</div>
          <div className="text-white text-xl font-semibold mb-4">{t.error}</div>
          <button
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => window.location.reload()}
          >
            {t.retry}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="character-list__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {characters.map((character, index) => (
        <div key={character.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <CharacterCard character={character} type={type} language={language} />
        </div>
      ))}
    </div>
  )
}
