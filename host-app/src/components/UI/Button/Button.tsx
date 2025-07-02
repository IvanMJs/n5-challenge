"use client"

import type React from "react"
import { StyledButton } from "./Button.styles"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "danger"
  disabled?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const buttonClass = `button ${variant !== "primary" ? `button--${variant}` : ""} ${className}`.trim()

  return (
    <StyledButton className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
