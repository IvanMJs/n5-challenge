import * as React from "react"
import { CardWrapper, CardHeader as StyledHeader, CardTitle as StyledTitle, CardDescription as StyledDescription, CardContent as StyledContent, CardFooter as StyledFooter } from "./Card.styles"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <CardWrapper ref={ref} className={`card${className ? ` ${className}` : ""}`} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <StyledHeader ref={ref} className={`card__header${className ? ` ${className}` : ""}`} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <StyledTitle ref={ref} className={`card__title${className ? ` ${className}` : ""}`} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <StyledDescription ref={ref} className={`card__description${className ? ` ${className}` : ""}`} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <StyledContent ref={ref} className={`card__content${className ? ` ${className}` : ""}`} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <StyledFooter ref={ref} className={`card__footer${className ? ` ${className}` : ""}`} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
