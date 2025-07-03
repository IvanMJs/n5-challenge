import styled, { css } from "styled-components"

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"

export type ButtonSize = "default" | "sm" | "lg" | "icon"

const variantStyles = {
  default: css`
    background: var(--primary, #6366f1);
    color: var(--primary-foreground, #fff);
    &:hover {
      background: rgba(99, 102, 241, 0.9);
    }
  `,
  destructive: css`
    background: var(--destructive, #ef4444);
    color: var(--destructive-foreground, #fff);
    &:hover {
      background: rgba(239, 68, 68, 0.9);
    }
  `,
  outline: css`
    border: 1px solid var(--input, #d1d5db);
    background: var(--background, #fff);
    color: var(--foreground, #111827);
    &:hover {
      background: var(--accent, #f3f4f6);
      color: var(--accent-foreground, #111827);
    }
  `,
  secondary: css`
    background: var(--secondary, #f3f4f6);
    color: var(--secondary-foreground, #111827);
    &:hover {
      background: rgba(243, 244, 246, 0.8);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--foreground, #111827);
    &:hover {
      background: var(--accent, #f3f4f6);
      color: var(--accent-foreground, #111827);
    }
  `,
  link: css`
    background: none;
    color: var(--primary, #6366f1);
    text-decoration: underline;
    text-underline-offset: 4px;
    &:hover {
      text-decoration: underline;
    }
  `,
}

const sizeStyles = {
  default: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
  `,
  sm: css`
    height: 2.25rem;
    border-radius: 0.375rem;
    padding: 0 0.75rem;
    font-size: 0.95rem;
  `,
  lg: css`
    height: 2.75rem;
    border-radius: 0.5rem;
    padding: 0 2rem;
    font-size: 1.1rem;
  `,
  icon: css`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
  `,
}

export const StyledButton = styled.button<{
  $variant: ButtonVariant
  $size: ButtonSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-weight: 500;
  font-family: inherit;
  transition: background 0.2s, color 0.2s;
  outline: none;
  box-sizing: border-box;
  user-select: none;
  pointer-events: auto;
  opacity: 1;
  cursor: pointer;
  ${props => variantStyles[props.$variant]}
  ${props => sizeStyles[props.$size]}
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  & svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
` 