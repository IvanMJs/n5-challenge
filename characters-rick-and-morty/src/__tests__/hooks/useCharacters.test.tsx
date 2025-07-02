import { renderHook, waitFor } from "@testing-library/react"
import { useCharacters } from "../../hooks/useCharacters"
import { characterService } from "../../services/CharacterService"

// Mock the character service -------------------------------------------------
jest.mock("../../services/CharacterService")
const mockedCharacterService = characterService as jest.Mocked<typeof characterService>

// ---------------------------------------------------------------------------

const mockCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: { name: "Earth (C-137)", url: "" },
    location: { name: "Citadel of Ricks", url: "" },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [],
    url: "",
    created: "",
  },
]

describe("useCharacters (Rick & Morty)", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("fetches characters successfully", async () => {
    mockedCharacterService.getCharacters.mockResolvedValue(mockCharacters)

    const { result } = renderHook(() => useCharacters())

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.characters).toEqual(mockCharacters)
    expect(result.current.error).toBeNull()
  })

  it("handles fetch errors", async () => {
    const errorMessage = "Failed to fetch characters"
    mockedCharacterService.getCharacters.mockRejectedValue(new Error(errorMessage))

    const { result } = renderHook(() => useCharacters())

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.characters).toEqual([])
    expect(result.current.error).toBe(errorMessage)
  })
})
