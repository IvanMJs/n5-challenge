import styled, { css } from "styled-components"

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledFormLabel = styled.label<{ $error?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  ${({ $error }) =>
    $error &&
    css`
      color: var(--destructive, #ef4444);
    `}
`;

export const StyledFormDescription = styled.p`
  font-size: 0.875rem;
  color: var(--muted-foreground, #6b7280);
`;

export const StyledFormMessage = styled.p<{ $error?: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  ${({ $error }) =>
    $error &&
    css`
      color: var(--destructive, #ef4444);
    `}
`; 