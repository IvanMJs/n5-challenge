import styled, { css } from "styled-components"

export const StyledCarouselWrapper = styled.div`
  position: relative;
`;

export const StyledCarouselContent = styled.div<{ $orientation: "horizontal" | "vertical" }>`
  display: flex;
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          margin-left: -1rem;
        `
      : css`
          margin-top: -1rem;
          flex-direction: column;
        `}
`;

export const StyledCarouselItem = styled.div<{ $orientation: "horizontal" | "vertical" }>`
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          padding-left: 1rem;
        `
      : css`
          padding-top: 1rem;
        `}
`;

export const StyledCarouselButton = styled.button`
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background, #fff);
  border: 1px solid var(--border, #e5e7eb);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.carousel__arrow {
    width: 1rem;
    height: 1rem;
  }
`; 