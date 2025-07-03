import { render, screen } from "@testing-library/react"
import { CharacterCard } from "../../components/CharacterCard/CharacterCard"
import type { Character } from "../../types"

const mockCharacter: Character = {
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
}

describe("CharacterCard Component", () => {
  it("renders character information correctly", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    expect(screen.getByText("Harry Potter")).toBeInTheDocument()
    expect(screen.getByText("Gryffindor")).toBeInTheDocument()
    expect(screen.getByText("human")).toBeInTheDocument()
    expect(screen.getByText("male")).toBeInTheDocument()
    expect(screen.getByText("Daniel Radcliffe")).toBeInTheDocument()
  })

  it("renders character image with correct alt text", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    const image = screen.getByAltText("Harry Potter")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", mockCharacter.image)
  })

  it("applies correct house style for Gryffindor", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    const houseElement = screen.getByText("Gryffindor")
    // El color de fondo para Gryffindor es #740001
    expect(houseElement).toHaveStyle({ backgroundColor: "#740001" })
  })

  it("displays translations in Spanish", () => {
    render(<CharacterCard character={mockCharacter} language="es" />)

    expect(screen.getByText("Casa:")).toBeInTheDocument()
    expect(screen.getByText("Especie:")).toBeInTheDocument()
    expect(screen.getByText("Género:")).toBeInTheDocument()
    expect(screen.getByText("Actor:")).toBeInTheDocument()
  })

  it("shows wizard badge when character is a wizard", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    expect(screen.getByText("✨")).toBeInTheDocument()
  })

  it("shows student badge when character is a student", () => {
    render(<CharacterCard character={mockCharacter} language="en" />)

    expect(screen.getByText("🎓")).toBeInTheDocument()
  })
})
