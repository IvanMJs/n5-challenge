import styled from "styled-components"

export const StyledAvatar = styled.div`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 9999px;
`;

export const StyledAvatarImage = styled.img`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
`;

export const StyledAvatarFallback = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: var(--muted, #f3f4f6);
`; 