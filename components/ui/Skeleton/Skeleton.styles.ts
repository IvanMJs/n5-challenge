import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const SkeletonStyled = styled.div`
  animation: ${pulse} 1.5s ease-in-out infinite;
  border-radius: 0.375rem;
  background: #e5e7eb; /* bg-muted */
  &.skeleton {
    // BEM root
  }
`; 