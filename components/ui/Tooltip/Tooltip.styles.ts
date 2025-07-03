import styled from "styled-components"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

export const TooltipContentRoot = styled(TooltipPrimitive.Content)`
  z-index: 50;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--color-border);
  background: var(--color-popover);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  color: var(--color-popover-foreground);
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  animation: fadeIn 0.15s, zoomIn 0.15s;

  &[data-state="closed"] {
    animation: fadeOut 0.15s, zoomOut 0.15s;
  }

  &[data-side="bottom"] {
    animation: slideInFromTop 0.15s;
  }
  &[data-side="left"] {
    animation: slideInFromRight 0.15s;
  }
  &[data-side="right"] {
    animation: slideInFromLeft 0.15s;
  }
  &[data-side="top"] {
    animation: slideInFromBottom 0.15s;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @keyframes zoomIn {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
  }
  @keyframes zoomOut {
    from { transform: scale(1); }
    to { transform: scale(0.95); }
  }
  @keyframes slideInFromTop {
    from { transform: translateY(-8px); }
    to { transform: translateY(0); }
  }
  @keyframes slideInFromRight {
    from { transform: translateX(8px); }
    to { transform: translateX(0); }
  }
  @keyframes slideInFromLeft {
    from { transform: translateX(-8px); }
    to { transform: translateX(0); }
  }
  @keyframes slideInFromBottom {
    from { transform: translateY(8px); }
    to { transform: translateY(0); }
  }
`; 