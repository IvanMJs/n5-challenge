import * as React from "react"
import { BadgeWrapper } from "./Badge.styles"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  return (
    <BadgeWrapper className={`badge${className ? ` ${className}` : ""}`} $variant={variant} {...props} />
  )
}

export { Badge }
