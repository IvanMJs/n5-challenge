import styled from "styled-components"
import * as ToastPrimitives from "@radix-ui/react-toast"

export const ToastViewportRoot = styled(ToastPrimitives.Viewport)`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  max-height: 100vh;
  width: 100%;
  flex-direction: column-reverse;
  padding: 1rem;
  right: 0;
  bottom: 0;
  left: auto;
  max-width: 420px;
  @media (max-width: 640px) {
    right: auto;
    left: 0;
    max-width: 100vw;
  }
`;

export const ToastRoot = styled(ToastPrimitives.Root)`
  pointer-events: auto;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--color-border);
  padding: 1.5rem 2rem 1.5rem 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  background: var(--color-background);
  color: var(--color-foreground);
  transition: all 0.2s;
  &[data-variant="destructive"] {
    border-color: var(--color-destructive);
    background: var(--color-destructive);
    color: var(--color-destructive-foreground);
  }
`;

export const ToastActionRoot = styled(ToastPrimitives.Action)`
  display: inline-flex;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid var(--color-border);
  background: transparent;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    background: var(--color-secondary);
  }
  &:focus {
    outline: 2px solid var(--color-ring);
    outline-offset: 2px;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &[data-variant="destructive"] {
    border-color: var(--color-muted);
    background: var(--color-destructive);
    color: var(--color-destructive-foreground);
  }
`;

export const ToastCloseRoot = styled(ToastPrimitives.Close)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border-radius: 0.375rem;
  padding: 0.25rem;
  color: var(--color-foreground);
  opacity: 0.7;
  transition: opacity 0.2s, color 0.2s;
  &:hover {
    color: var(--color-foreground);
    opacity: 1;
  }
  &:focus {
    outline: 2px solid var(--color-ring);
    outline-offset: 2px;
    opacity: 1;
  }
  &[data-variant="destructive"] {
    color: var(--color-destructive-foreground);
  }
  .toast__icon {
    width: 1rem;
    height: 1rem;
  }
`;

export const ToastTitleRoot = styled(ToastPrimitives.Title)`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const ToastDescriptionRoot = styled(ToastPrimitives.Description)`
  font-size: 0.875rem;
  opacity: 0.9;
`; 