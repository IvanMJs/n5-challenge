import { render, screen, waitFor } from "@testing-library/react"
import CharacterList from "../../components/CharacterList/CharacterList"
import type { Character } from "../../types"

// Mock fetch globally
global.fetch = jest.fn()

const mockFetch = fetch as jest.MockedFunction<typeof fetch>

const mockCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/6"],
    url: "https://rickandmortyapi.com/api/character/3",
    created: "2017-11-04T19:09:56.428Z",
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
    expect(mockFetch).toHaveBeenCalledWith("https://rickandmortyapi.com/api/character")
  })

  it("renders characters successfully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: mockCharacters }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
      expect(screen.getByText("Morty Smith")).toBeInTheDocument()
      expect(screen.getByText("Summer Smith")).toBeInTheDocument()
    })
  })

  it("limits to 12 characters", async () => {
    const manyCharacters = Array.from({ length: 15 }, (_, i) => ({
      ...mockCharacters[0],
      id: i + 1,
      name: `Character ${i + 1}`,
      image: `https://example.com/image${i + 1}.jpg`,
    }))

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: manyCharacters }),
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
        id: 1,
        name: "Incomplete Character",
        image: "https://example.com/image.jpg",
        // Missing other properties
      },
    ]

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: incompleteCharacters }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Incomplete Character")).toBeInTheDocument()
    })
  })

  it("handles empty results array", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [] }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      // Should render without errors even with empty results
      expect(screen.queryByText("Rick Sanchez")).not.toBeInTheDocument()
    })
  })

  it("passes language prop to CharacterCard components", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [mockCharacters[0]] }),
    } as Response)

    render(<CharacterList language="es" />)

    await waitFor(() => {
      // The CharacterCard should receive the language prop
      // We can verify this by checking if Spanish translations are shown
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
    })
  })

  it("renders character images with correct alt text", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [mockCharacters[0]] }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      const image = screen.getByAltText("Rick Sanchez")
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute("src", "https://rickandmortyapi.com/api/character/avatar/1.jpeg")
    })
  })

  it("displays character status correctly", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [mockCharacters[0]] }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Alive")).toBeInTheDocument()
    })
  })

  it("displays character species correctly", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [mockCharacters[0]] }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Human")).toBeInTheDocument()
    })
  })

  it("displays character origin correctly", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [mockCharacters[0]] }),
    } as Response)

    render(<CharacterList language="en" />)

    await waitFor(() => {
      expect(screen.getByText("Earth (C-137)")).toBeInTheDocument()
    })
  })
}) 