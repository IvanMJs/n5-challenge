import { render, screen } from "@testing-library/react"
import { CharacterCard } from "../../components/CharacterCard/CharacterCard"
import type { Character } from "../../types"

const mockCharacter: Character = {
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
}

describe("CharacterCard Component", () => {
  it("renders character information correctly", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
    expect(screen.getByText("Alive")).toBeInTheDocument()
    expect(screen.getByText("Human")).toBeInTheDocument()
    expect(screen.getByText("Male")).toBeInTheDocument()
    expect(screen.getByText("Earth (C-137)")).toBeInTheDocument()
  })

  it("renders character image with correct alt text", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    const image = screen.getByAltText("Rick Sanchez")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", mockCharacter.image)
  })

  it("applies correct style for alive character status badge", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    const statusElement = screen.getByText("Alive")
    // El StatusBadge para 'Alive' tiene un background linear-gradient con #43e97b y #38f9d7
    expect(statusElement).toHaveStyle({
      background: expect.stringContaining("#43e97b")
    })
  })

  it("displays translations in Spanish", () => {
    render(<CharacterCard character={mockCharacter} language="es" />)

    expect(screen.getByText("Estado:")).toBeInTheDocument()
    expect(screen.getByText("Especie:")).toBeInTheDocument()
    expect(screen.getByText("Género:")).toBeInTheDocument()
    expect(screen.getByText("Origen:")).toBeInTheDocument()
  })
})
