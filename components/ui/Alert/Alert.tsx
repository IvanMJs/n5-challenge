import * as React from "react"
import { StyledAlert, StyledAlertTitle, StyledAlertDescription } from "./Alert.styles"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "default", ...props }, ref) => (
    <StyledAlert ref={ref} $variant={variant} {...props} />
  )
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => <StyledAlertTitle ref={ref} {...props} />)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <StyledAlertDescription ref={ref} {...props} />)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
