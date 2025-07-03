import styled from "styled-components"
import * as SwitchPrimitives from "@radix-ui/react-switch"

export const SwitchRoot = styled(SwitchPrimitives.Root)`
  display: inline-flex;
  height: 1.5rem;
  width: 2.75rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  transition: background 0.2s, border 0.2s;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &[data-state="checked"] {
    background: var(--color-primary);
  }
  &[data-state="unchecked"] {
    background: var(--color-input);
  }
`;

export const SwitchThumb = styled(SwitchPrimitives.Thumb)`
  pointer-events: none;
  display: block;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 9999px;
  background: var(--color-background);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  &[data-state="checked"] {
    transform: translateX(1.25rem);
  }
  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`; 