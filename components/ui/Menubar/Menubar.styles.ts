import styled, { css } from "styled-components"

export const StyledMenubarRoot = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border, #e5e7eb);
  background: var(--background, #fff);
  padding: 0.25rem;
`;

export const StyledMenubarTrigger = styled.button`
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  background: transparent;
  &:focus, &[data-state="open"] {
    background: var(--accent, #f3f4f6);
    color: var(--accent-foreground, #111827);
  }
`;

export const StyledMenubarSubTrigger = styled(StyledMenubarTrigger)<{ $inset?: boolean }>`
  padding: 0.375rem 0.5rem;
  ${({ $inset }) => $inset && css`padding-left: 2rem;`}
`;

export const StyledMenubarSubContent = styled.div`
  z-index: 50;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--border, #e5e7eb);
  background: var(--popover, #fff);
  color: var(--popover-foreground, #111827);
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  padding: 0.25rem;
`;

export const StyledMenubarContent = styled(StyledMenubarSubContent)`
  min-width: 12rem;
`;

export const StyledMenubarItem = styled.div<{ $inset?: boolean }>`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  font-size: 1rem;
  outline: none;
  ${({ $inset }) => $inset && css`padding-left: 2rem;`}
  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
  &:focus, &[data-state="open"] {
    background: var(--accent, #f3f4f6);
    color: var(--accent-foreground, #111827);
  }
`;

export const StyledMenubarCheckboxItem = styled(StyledMenubarItem)`
  padding-left: 2rem;
`;

export const StyledMenubarRadioItem = styled(StyledMenubarItem)`
  padding-left: 2rem;
`;

export const StyledMenubarLabel = styled.div<{ $inset?: boolean }>`
  padding: 0.375rem 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground, #111827);
  ${({ $inset }) => $inset && css`padding-left: 2rem;`}
`;

export const StyledMenubarSeparator = styled.div`
  margin: 0.25rem 0;
  height: 1px;
  background: var(--muted, #f3f4f6);
`;

export const StyledMenubarShortcut = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--muted-foreground, #6b7280);
`; 