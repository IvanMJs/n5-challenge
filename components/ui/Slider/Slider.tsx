"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "./Slider.styles"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderRoot ref={ref} className={className} {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
