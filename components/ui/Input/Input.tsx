import * as React from "react"
import { InputStyled } from "./Input.styles"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <InputStyled type={type} className={className} ref={ref} {...props} />
    )
  }
)
Input.displayName = "Input"

export { Input }
