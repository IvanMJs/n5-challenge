"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { SwitchRoot, SwitchThumb } from "./Switch.styles"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchRoot className={className} {...props} ref={ref}>
    <SwitchThumb />
  </SwitchRoot>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
