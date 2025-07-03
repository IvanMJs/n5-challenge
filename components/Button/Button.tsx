"use client"

import type React from "react"
import { StyledButton } from "./Button.styles"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "danger" | "rick" | "harry"
  disabled?: boolean
  icon?: string
}

export function Button({ children, onClick, variant = "primary", disabled = false, icon }: ButtonProps) {
  return (
    <StyledButton
      className={`button button--${variant}${disabled ? " disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Shine effect */}
      <div className="button__shine" />
      <span className="button__content">
        {icon && <span className="button__icon">{icon}</span>}
        {children}
      </span>
    </StyledButton>
  )
}
