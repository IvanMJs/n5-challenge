import styled from "styled-components"

export const StyledAlertDialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);
  /* Puedes agregar animaciones si lo deseas */
`;

export const StyledAlertDialogContent = styled.div`
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
  transition: box-shadow 0.2s;
  border-radius: 0.5rem;
`;

export const StyledAlertDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledAlertDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const StyledAlertDialogTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const StyledAlertDialogDescription = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground, #6b7280);
`; 