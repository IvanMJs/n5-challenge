import axios from "axios"
import type { Character, CharacterService } from "../types"

class HarryPotterCharacterService implements CharacterService {
  private readonly baseUrl = "https://hp-api.onrender.com/api"

  async getCharacters(): Promise<Character[]> {
    try {
      const response = await axios.get<Character[]>(`${this.baseUrl}/characters`)
      // Filter characters that have images and are main characters
      return response.data.filter((character) => character.image && character.image.trim() !== "").slice(0, 20) // Limit to first 20 characters for better performance
    } catch (error) {
      console.error("Error fetching Harry Potter characters:", error)
      throw new Error("Failed to fetch characters")
    }
  }
}

export const characterService = new HarryPotterCharacterService()
