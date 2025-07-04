"use client"

import type React from "react"
import { StyledButton } from "./Button.styles"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "danger" | "rick" | "harry"
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  icon,
  variant = "primary",
}) => {
  const buttonClass = `button${variant ? ` button--${variant}` : ""} ${className}`.trim();

  return (
    <StyledButton className={buttonClass} onClick={onClick} disabled={disabled}>
      {icon && <span className="button__icon" aria-hidden="true">{icon}</span>}
      {children}
    </StyledButton>
  );
}
