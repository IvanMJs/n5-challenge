import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import {
  StyledButton,
  type ButtonVariant,
  type ButtonSize,
} from "./Button.styles"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot ref={ref} {...props}>
          <StyledButton $variant={variant} $size={size} as="span">
            {props.children}
          </StyledButton>
        </Slot>
      )
    }
    return (
      <button ref={ref} {...props}>
        <StyledButton $variant={variant} $size={size} as="span">
          {props.children}
        </StyledButton>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, StyledButton }
