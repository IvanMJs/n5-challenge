"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollBarStyled,
  ScrollAreaThumbStyled,
  ScrollAreaCornerStyled
} from "./ScrollArea.styles"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot ref={ref} className={className} {...props}>
    <ScrollAreaViewport>{children}</ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCornerStyled />
  </ScrollAreaRoot>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollBarStyled
    ref={ref}
    orientation={orientation}
    className={className}
    $orientation={orientation}
    {...props}
  >
    <ScrollAreaThumbStyled />
  </ScrollBarStyled>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
