import { renderHook, waitFor } from "@testing-library/react"
import { useCharacters } from "../../hooks/useCharacters"
import { characterService } from "../../services/CharacterService"

// Mock the character service -------------------------------------------------
jest.mock("../../services/CharacterService")
const mockedCharacterService = characterService as jest.Mocked<typeof characterService>

// ---------------------------------------------------------------------------

const mockCharacters = [
  {
    id: "1",
    name: "Harry Potter",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: { wood: "holly", core: "phoenix feather", length: 11 },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [],
    alive: true,
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
]

describe("useCharacters (Harry Potter)", () => {
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
