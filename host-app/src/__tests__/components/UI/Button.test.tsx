"use client"
import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "../../../components/UI/Button/Button"
import { jest } from "@jest/globals"

describe("Button Component", () => {
  it("renders button with children", () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText("Test Button")).toBeInTheDocument()
  })

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(screen.getByText("Click me"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("applies correct variant class", () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByText("Secondary Button")
    expect(button).toHaveClass("button--secondary")
  })

  it("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByText("Disabled Button")
    expect(button).toBeDisabled()
  })
})
