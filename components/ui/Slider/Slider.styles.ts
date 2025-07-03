import styled from "styled-components"
import * as SliderPrimitive from "@radix-ui/react-slider"

export const SliderRoot = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
`;

export const SliderTrack = styled(SliderPrimitive.Track)`
  position: relative;
  height: 0.5rem;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 9999px;
  background: var(--color-secondary);
`;

export const SliderRange = styled(SliderPrimitive.Range)`
  position: absolute;
  height: 100%;
  background: var(--color-primary);
`;

export const SliderThumb = styled(SliderPrimitive.Thumb)`
  display: block;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 9999px;
  border: 2px solid var(--color-primary);
  background: var(--color-background);
  transition: box-shadow 0.2s;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`; 