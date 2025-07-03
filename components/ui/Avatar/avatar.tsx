"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {
  StyledAvatar,
  StyledAvatarImage,
  StyledAvatarFallback,
} from "./Avatar.styles"

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Root asChild>
    <StyledAvatar ref={ref} {...props} />
  </AvatarPrimitive.Root>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Image asChild>
    <StyledAvatarImage ref={ref} {...props} />
  </AvatarPrimitive.Image>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Fallback asChild>
    <StyledAvatarFallback ref={ref} {...props} />
  </AvatarPrimitive.Fallback>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
