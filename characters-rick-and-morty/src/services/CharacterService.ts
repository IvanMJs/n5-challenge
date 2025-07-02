import axios from "axios"
import type { Character, ApiResponse, CharacterService } from "../types"

class RickAndMortyCharacterService implements CharacterService {
  private readonly baseUrl = "https://rickandmortyapi.com/api"

  async getCharacters(): Promise<Character[]> {
    try {
      const response = await axios.get<ApiResponse>(`${this.baseUrl}/character`)
      return response.data.results
    } catch (error) {
      console.error("Error fetching Rick and Morty characters:", error)
      throw new Error("Failed to fetch characters")
    }
  }
}

export const characterService = new RickAndMortyCharacterService()
