import styled from "styled-components";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export const ProgressRoot = styled(ProgressPrimitive.Root)`
  position: relative;
  height: 1rem;
  width: 100%;
  overflow: hidden;
  border-radius: 9999px;
  background: #f3f4f6; /* bg-secondary */
  &.progress {
    // BEM root
  }
`;

export const ProgressIndicator = styled(ProgressPrimitive.Indicator)`
  height: 100%;
  width: 100%;
  flex: 1;
  background: #1d4ed8; /* bg-primary */
  transition: transform 0.2s;
  &.progress__indicator {
    // BEM element
  }
`; 