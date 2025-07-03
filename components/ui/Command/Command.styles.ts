import styled from "styled-components"

export const StyledCommand = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.375rem;
  background: var(--popover, #fff);
  color: var(--popover-foreground, #111827);
`;

export const StyledCommandInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border, #e5e7eb);
  padding: 0 0.75rem;
`;

export const StyledCommandInput = styled.input`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.375rem;
  background: transparent;
  padding: 0.75rem 0;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: var(--muted-foreground, #6b7280);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledCommandList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledCommandEmpty = styled.div`
  padding: 1.5rem 0;
  text-align: center;
  font-size: 1rem;
`;

export const StyledCommandGroup = styled.div`
  overflow: hidden;
  padding: 0.25rem;
  color: var(--foreground, #111827);
`;

export const StyledCommandItem = styled.div`
  position: relative;
  display: flex;
  cursor: default;
  gap: 0.5rem;
  user-select: none;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  font-size: 1rem;
  outline: none;
  &[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }
  &[data-selected="true"] {
    background: var(--accent, #f3f4f6);
    color: var(--accent-foreground, #111827);
  }
`;

export const StyledCommandShortcut = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--muted-foreground, #6b7280);
`;

export const StyledCommandSeparator = styled.div`
  margin: 0 -0.25rem;
  height: 1px;
  background: var(--border, #e5e7eb);
`; 