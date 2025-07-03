import styled from "styled-components"

export const StyledCheckboxRoot = styled.button`
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--primary, #6366f1);
  background: var(--background, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: border 0.2s, background 0.2s;
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--ring, #6366f1);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &[data-state="checked"] {
    background: var(--primary, #6366f1);
    color: var(--primary-foreground, #fff);
  }
`;

export const StyledCheckboxIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
`; 