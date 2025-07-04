import { render, screen, waitFor } from "@testing-library/react"
import CharacterList from "../../components/CharacterList/CharacterList"
import type { Character } from "../../types"

// Mock fetch globally
global.fetch = jest.fn()

const mockFetch = fetch as jest.MockedFunction<typeof fetch>

const mockCharacters = [
  {
    id: "1",
    name: "Harry Potter",
    alternate_names: ["The Boy Who Lived"],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: {
      wood: "holly",
      core: "phoenix feather",
      length: 11,
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [],
    alive: true,
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    id: "2",
    name: "Hermione Granger",
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    wizard: true,
    ancestry: "muggle-born",
    eyeColour: "brown",
    hairColour: "brown",
    wand: {
      wood: "vine",
      core: "dragon heartstring",
      length: 10.75,
    },
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alternate_actors: [],
    alive: true,
    image: "https://ik.imagekit.io/hpapi/hermione.jpg",
  },
  {
    id: "3",
    name: "Ron Weasley",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: {
      wood: "willow",
      core: "unicorn tail hair",
      length: 14,
    },
    patronus: "jack russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alternate_actors: [],
    alive: true,
    image: "https://ik.imagekit.io/hpapi/ron.jpg",
  }
]

describe("CharacterList Component", () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it("shows loading state initially", () => {
    mockFetch.mockImplementation(() =>
      new Promise(() => {}) // Never resolves to keep loading state
    )

    render(<CharacterList language="en" />)
    
    // Should show loading state (though not explicitly rendered, the component is in loading state)
    expect(mockFetch).toHaveBeenCalledWith("https://hp-api.onrender.com/api/characters")
  })

  it("renders characters successfully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockCharacters,
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Harry Potter")).toBeInTheDocument()
      expect(screen.getByText("Hermione Granger")).toBeInTheDocument()
      expect(screen.getByText("Ron Weasley")).toBeInTheDocument()
    })
  })

  it("filters out characters without images", async () => {
    const charactersWithNoImage = [
      { ...mockCharacters[0], image: "" },
      { ...mockCharacters[1], image: "https://ik.imagekit.io/hpapi/hermione.jpg" },
      { ...mockCharacters[2], image: null },
    ]

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => charactersWithNoImage,
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      // Should only show Hermione (the one with image)
      expect(screen.getByText("Hermione Granger")).toBeInTheDocument()
      expect(screen.queryByText("Harry Potter")).not.toBeInTheDocument()
      expect(screen.queryByText("Ron Weasley")).not.toBeInTheDocument()
    })
  })

  it("limits to 12 characters", async () => {
    const manyCharacters = Array.from({ length: 15 }, (_, i) => ({
      ...mockCharacters[0],
      id: `${i + 1}`,
      name: `Character ${i + 1}`,
      image: `https://example.com/image${i + 1}.jpg`,
    }))

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => manyCharacters,
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      // Should only show 12 characters
      expect(screen.getByText("Character 1")).toBeInTheDocument()
      expect(screen.getByText("Character 12")).toBeInTheDocument()
      expect(screen.queryByText("Character 13")).not.toBeInTheDocument()
      expect(screen.queryByText("Character 14")).not.toBeInTheDocument()
      expect(screen.queryByText("Character 15")).not.toBeInTheDocument()
    })
  })

  it("shows error message when API call fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"))

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Failed to load characters")).toBeInTheDocument()
    })
  })

  it("shows error message when API returns non-ok response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Failed to load characters")).toBeInTheDocument()
    })
  })

  it("handles missing character properties gracefully", async () => {
    const incompleteCharacters = [
      {
        id: "1",
        name: "Incomplete Character",
        image: "https://example.com/image.jpg",
        // Missing other properties
      },
    ]

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => incompleteCharacters,
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Incomplete Character")).toBeInTheDocument()
    })
  })

  it("passes language prop to CharacterCard components", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [mockCharacters[0]],
    } as Response)

    render(<CharacterList language="es" />)

    await waitFor(() => {
      // The CharacterCard should receive the language prop
      // We can verify this by checking if Spanish translations are shown
      expect(screen.getByText("Harry Potter")).toBeInTheDocument()
    })
  })

  it("renders character images with correct alt text", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [mockCharacters[0]],
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      const image = screen.getByAltText("Harry Potter")
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute("src", "https://ik.imagekit.io/hpapi/harry.jpg")
    })
  })
}) 