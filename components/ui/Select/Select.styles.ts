import styled, { css } from "styled-components";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectTriggerStyled = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: 2.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background: #fff;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border-color: #1d4ed8;
    box-shadow: 0 0 0 2px #1d4ed833;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.select__trigger {
    // BEM element
  }
`;

export const SelectIconStyled = styled.span`
  display: flex;
  align-items: center;
  opacity: 0.5;
  &.select__icon {
    // BEM element
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const SelectContentStyled = styled(SelectPrimitive.Content)<{ $position: string }>`
  position: relative;
  z-index: 50;
  max-height: 24rem;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #111827;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  ${({ $position }) =>
    $position === "popper"
      ? css`
          &[data-side="bottom"] { transform: translateY(0.25rem); }
          &[data-side="left"] { transform: translateX(-0.25rem); }
          &[data-side="right"] { transform: translateX(0.25rem); }
          &[data-side="top"] { transform: translateY(-0.25rem); }
        `
      : ""}
  &.select__content {
    // BEM element
  }
`;

export const SelectViewportStyled = styled(SelectPrimitive.Viewport)<{ $position: string }>`
  padding: 0.25rem;
  ${({ $position }) =>
    $position === "popper"
      ? css`
          height: var(--radix-select-trigger-height);
          width: 100%;
          min-width: var(--radix-select-trigger-width);
        `
      : ""}
  &.select__viewport {
    // BEM element
  }
`;

export const SelectLabelStyled = styled(SelectPrimitive.Label)`
  padding: 0.375rem 0.5rem 0.375rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  &.select__label {
    // BEM element
  }
`;

export const SelectItemStyled = styled(SelectPrimitive.Item)`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem 0.375rem 2rem;
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:focus {
    background: #e0e7ff;
    color: #1d4ed8;
  }
  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
  &.select__item {
    // BEM element
  }
`;

export const SelectItemIndicatorStyled = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  width: 1.25rem;
  &.select__item-indicator {
    // BEM element
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const SelectSeparatorStyled = styled(SelectPrimitive.Separator)`
  margin: 0.25rem 0;
  height: 1px;
  background: #e5e7eb;
  &.select__separator {
    // BEM element
  }
`;

export const SelectScrollUpButtonStyled = styled(SelectPrimitive.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  cursor: default;
  &.select__scroll-up {
    // BEM element
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const SelectScrollDownButtonStyled = styled(SelectPrimitive.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  cursor: default;
  &.select__scroll-down {
    // BEM element
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const SelectValueStyled = styled(SelectPrimitive.Value)`
  &.select__value {
    // BEM element
  }
`; 