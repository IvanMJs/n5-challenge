"use client"

import { useState, useEffect } from "react"
import type { Character } from "../types"
import { characterService } from "../services/CharacterService"

interface UseCharactersReturn {
  characters: Character[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export const useCharacters = (): UseCharactersReturn => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCharacters = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await characterService.getCharacters()
      setCharacters(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return {
    characters,
    loading,
    error,
    refetch: fetchCharacters,
  }
}
