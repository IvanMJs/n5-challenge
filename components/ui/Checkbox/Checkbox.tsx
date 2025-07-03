"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import {
  StyledCheckboxRoot,
  StyledCheckboxIndicator,
} from "./Checkbox.styles"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ ...props }, ref) => (
  <StyledCheckboxRoot as={CheckboxPrimitive.Root} ref={ref} {...props}>
    <StyledCheckboxIndicator as={CheckboxPrimitive.Indicator}>
      <Check className="checkbox__icon" />
    </StyledCheckboxIndicator>
  </StyledCheckboxRoot>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
