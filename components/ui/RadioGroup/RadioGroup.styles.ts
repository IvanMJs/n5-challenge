import styled from "styled-components";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioGroupRoot = styled(RadioGroupPrimitive.Root)`
  display: grid;
  gap: 0.5rem;
  &.radio-group {
    // BEM root
  }
`;

export const RadioGroupItemStyled = styled(RadioGroupPrimitive.Item)`
  aspect-ratio: 1 / 1;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border: 1px solid #1d4ed8; /* border-primary */
  color: #1d4ed8; /* text-primary */
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  &:focus-visible {
    box-shadow: 0 0 0 2px #1d4ed8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.radio-group__item {
    // BEM element
  }
`;

export const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  &.radio-group__indicator {
    // BEM element
  }
`; 