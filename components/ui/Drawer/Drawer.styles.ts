import styled from "styled-components"

export const StyledDrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);
`;

export const StyledDrawerContent = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem 0.625rem 0 0;
  border: 1px solid var(--border-color, #e5e7eb);
  background: var(--background, #fff);
`;

export const StyledDrawerHandle = styled.div`
  margin: 1rem auto 0 auto;
  height: 0.5rem;
  width: 6.25rem;
  border-radius: 9999px;
  background: var(--muted, #f3f4f6);
`;

export const StyledDrawerHeader = styled.div`
  display: grid;
  gap: 0.375rem;
  padding: 1rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledDrawerFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const StyledDrawerTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.2;
`;

export const StyledDrawerDescription = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground, #6b7280);
`;

export const StyledDrawerClose = styled.button``; 