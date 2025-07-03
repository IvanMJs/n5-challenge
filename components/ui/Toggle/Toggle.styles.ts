import styled from "styled-components"
import * as TogglePrimitive from "@radix-ui/react-toggle"

export const ToggleRoot = styled(TogglePrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  gap: 0.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  background: transparent;
  color: inherit;
  border: none;
  outline: none;
  box-shadow: none;
  &:hover {
    background: var(--color-muted);
    color: var(--color-muted-foreground);
  }
  &:focus-visible {
    outline: 2px solid var(--color-ring);
    outline-offset: 2px;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &[data-state="on"] {
    background: var(--color-accent);
    color: var(--color-accent-foreground);
  }
  & svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`; 