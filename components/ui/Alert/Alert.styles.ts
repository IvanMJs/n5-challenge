import styled, { css } from "styled-components"

export const StyledAlert = styled.div<{
  $variant?: "default" | "destructive"
}>`
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ $variant }) =>
      $variant === "destructive"
        ? "rgba(239, 68, 68, 0.5)" // border-destructive/50
        : "var(--border-color, #e5e7eb)"};
  padding: 1rem;
  background: ${({ $variant }) =>
    $variant === "destructive"
      ? "var(--alert-destructive-bg, #fff1f2)"
      : "var(--background, #fff)"};
  color: ${({ $variant }) =>
    $variant === "destructive"
      ? "var(--alert-destructive-color, #dc2626)"
      : "var(--foreground, #111827)"};
  
  & > svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: ${({ $variant }) =>
      $variant === "destructive"
        ? "var(--alert-destructive-color, #dc2626)"
        : "var(--foreground, #111827)"};
  }
  & > svg ~ * {
    padding-left: 1.75rem;
  }
  & > svg + div {
    transform: translateY(-3px);
  }

  // BEM: Alert--destructive
  ${({ $variant }) =>
    $variant === "destructive" &&
    css`
      border-color: rgba(239, 68, 68, 0.5);
      color: #dc2626;
      & > svg {
        color: #dc2626;
      }
    `}
`;

export const StyledAlertTitle = styled.h5`
  margin-bottom: 0.25rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.015em;
`;

export const StyledAlertDescription = styled.div`
  font-size: 0.875rem;
  & p {
    line-height: 1.5;
  }
`; 