"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { ProgressRoot, ProgressIndicator } from "./Progress.styles"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressRoot ref={ref} className={className} {...props}>
    <ProgressIndicator
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressRoot>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
