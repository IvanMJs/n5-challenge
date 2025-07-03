import styled, { css } from "styled-components"

export const StyledInputOTP = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &[data-disabled] {
    opacity: 0.5;
  }
`;

export const StyledInputOTPGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInputOTPSlot = styled.div<{ $isActive?: boolean }>`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--input, #d1d5db);
  border-bottom: 1px solid var(--input, #d1d5db);
  border-right: 1px solid var(--input, #d1d5db);
  font-size: 1rem;
  transition: box-shadow 0.2s;
  &:first-child {
    border-left: 1px solid var(--input, #d1d5db);
    border-radius: 0.375rem 0 0 0.375rem;
  }
  &:last-child {
    border-radius: 0 0.375rem 0.375rem 0;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      z-index: 10;
      box-shadow: 0 0 0 2px var(--ring, #6366f1);
    `}
`;

export const StyledInputOTPCaret = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    height: 1rem;
    width: 1px;
    background: var(--foreground, #111827);
    animation: blink 1s steps(1) infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export const StyledInputOTPSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`; 