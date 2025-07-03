import * as React from "react"
import { TextareaStyled } from "./Textarea.styles"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <TextareaStyled className={className} ref={ref} {...props} />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
