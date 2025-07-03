import styled from "styled-components"
import * as SheetPrimitive from "@radix-ui/react-dialog"

export const SheetOverlayStyled = styled(SheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);
  &[data-state="open"] {
    animation: fadeIn 0.3s;
  }
  &[data-state="closed"] {
    animation: fadeOut 0.3s;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export const SheetContentStyled = styled(SheetPrimitive.Content)<{ $side?: "top" | "bottom" | "left" | "right" }>`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--color-background, #fff);
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  transition: all 0.3s ease-in-out;
  ${({ $side }) => {
    switch ($side) {
      case "top":
        return `
          left: 0;
          right: 0;
          top: 0;
          border-bottom: 1px solid var(--color-border, #e2e8f0);
        `;
      case "bottom":
        return `
          left: 0;
          right: 0;
          bottom: 0;
          border-top: 1px solid var(--color-border, #e2e8f0);
        `;
      case "left":
        return `
          top: 0;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 75vw;
          max-width: 24rem;
          border-right: 1px solid var(--color-border, #e2e8f0);
        `;
      case "right":
      default:
        return `
          top: 0;
          bottom: 0;
          right: 0;
          height: 100%;
          width: 75vw;
          max-width: 24rem;
          border-left: 1px solid var(--color-border, #e2e8f0);
        `;
    }
  }}
`;

export const SheetHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const SheetFooterStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const SheetTitleStyled = styled(SheetPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-foreground, #222);
`;

export const SheetDescriptionStyled = styled(SheetPrimitive.Description)`
  font-size: 0.875rem;
  color: var(--color-muted-foreground, #666);
`;

export const SheetCloseStyled = styled(SheetPrimitive.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  background: transparent;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &:focus-visible {
    outline: 2px solid var(--color-ring, #6366f1);
    outline-offset: 2px;
  }
  &:disabled {
    pointer-events: none;
  }
`; 