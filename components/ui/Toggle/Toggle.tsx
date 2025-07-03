"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { ToggleRoot } from "./Toggle.styles"

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToggleRoot ref={ref} className={className} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }
