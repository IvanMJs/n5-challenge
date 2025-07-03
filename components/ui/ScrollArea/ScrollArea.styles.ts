import styled, { css } from "styled-components";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  position: relative;
  overflow: hidden;
  &.scroll-area {
    // BEM root
  }
`;

export const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  &.scroll-area__viewport {
    // BEM element
  }
`;

export const ScrollBarStyled = styled(ScrollAreaPrimitive.ScrollAreaScrollbar)<{ $orientation: "vertical" | "horizontal" }>`
  display: flex;
  touch-action: none;
  user-select: none;
  transition: background 0.2s;
  ${({ $orientation }) =>
    $orientation === "vertical"
      ? css`
          height: 100%;
          width: 0.625rem;
          border-left: 1px solid transparent;
          padding: 1px;
        `
      : css`
          height: 0.625rem;
          flex-direction: column;
          border-top: 1px solid transparent;
          padding: 1px;
        `}
  &.scroll-area__scrollbar {
    // BEM element
  }
`;

export const ScrollAreaThumbStyled = styled(ScrollAreaPrimitive.ScrollAreaThumb)`
  position: relative;
  flex: 1;
  border-radius: 9999px;
  background: #e5e7eb; /* bg-border */
  &.scroll-area__thumb {
    // BEM element
  }
`;

export const ScrollAreaCornerStyled = styled(ScrollAreaPrimitive.Corner)`
  &.scroll-area__corner {
    // BEM element
  }
`; 