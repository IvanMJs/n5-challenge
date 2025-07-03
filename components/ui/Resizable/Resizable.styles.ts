import styled from "styled-components";
import * as ResizablePrimitive from "react-resizable-panels";

export const ResizablePanelGroupStyled = styled(ResizablePrimitive.PanelGroup)`
  display: flex;
  height: 100%;
  width: 100%;
  &[data-panel-group-direction="vertical"] {
    flex-direction: column;
  }
  &.resizable {
    // BEM root
  }
`;

export const ResizableHandleStyled = styled(ResizablePrimitive.PanelResizeHandle)`
  position: relative;
  display: flex;
  width: 1px;
  align-items: center;
  justify-content: center;
  background: #e5e7eb; /* bg-border */
  outline: none;
  &:focus-visible {
    box-shadow: 0 0 0 1px #1d4ed8;
  }
  &[data-panel-group-direction="vertical"] {
    height: 1px;
    width: 100%;
    .resizable__grip {
      transform: rotate(90deg);
    }
  }
  &.resizable__handle {
    // BEM element
  }
`;

export const ResizableHandleGrip = styled.div`
  z-index: 10;
  display: flex;
  height: 1rem;
  width: 0.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background: #e5e7eb;
  &.resizable__grip {
    // BEM element
  }
  .resizable__icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
    color: #6b7280;
  }
`; 