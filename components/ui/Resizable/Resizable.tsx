"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
import {
  ResizablePanelGroupStyled,
  ResizableHandleStyled,
  ResizableHandleGrip
} from "./Resizable.styles"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePanelGroupStyled className={className} {...props} />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizableHandleStyled className={className} {...props}>
    {withHandle && (
      <ResizableHandleGrip>
        <GripVertical className="resizable__icon" />
      </ResizableHandleGrip>
    )}
  </ResizableHandleStyled>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
