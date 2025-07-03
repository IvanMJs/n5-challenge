import styled, { css } from "styled-components"

export const StyledContextMenuContent = styled.div`
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

export const StyledContextMenuItem = styled.div<{ $inset?: boolean }>`
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

export const StyledContextMenuCheckboxItem = styled(StyledContextMenuItem)`
  padding-left: 2rem;
`;

export const StyledContextMenuRadioItem = styled(StyledContextMenuItem)`
  padding-left: 2rem;
`;

export const StyledContextMenuLabel = styled.div<{ $inset?: boolean }>`
  padding: 0.375rem 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground, #111827);
  ${({ $inset }) => $inset && css`padding-left: 2rem;`}
`;

export const StyledContextMenuSeparator = styled.div`
  margin: 0.25rem 0;
  height: 1px;
  background: var(--border, #e5e7eb);
`;

export const StyledContextMenuShortcut = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--muted-foreground, #6b7280);
`;

export const StyledContextMenuSubContent = styled(StyledContextMenuContent)``;
export const StyledContextMenuSubTrigger = styled(StyledContextMenuItem)``; 