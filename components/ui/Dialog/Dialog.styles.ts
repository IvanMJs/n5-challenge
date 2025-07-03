import styled from "styled-components"

export const StyledDialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);
`;

export const StyledDialogContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 50;
  display: grid;
  width: 100%;
  max-width: 32rem;
  transform: translate(-50%, -50%);
  gap: 1rem;
  border: 1px solid var(--border-color, #e5e7eb);
  background: var(--background, #fff);
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
`;

export const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const StyledDialogTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.2;
`;

export const StyledDialogDescription = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground, #6b7280);
`;

export const StyledDialogClose = styled.button`
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
  &:focus {
    outline: 2px solid var(--ring, #6366f1);
  }
`; 